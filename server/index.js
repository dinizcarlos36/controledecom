import express from 'express';
import cors from 'cors';
import * as db from './db.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- MIDDLEWARE ---
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Token de acesso não fornecido' });

    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, user) => {
        if (err) return res.status(403).json({ error: 'Token inválido ou expirado' });
        req.user = user;
        next();
    });
};

// --- AUTHENTICATION ---
app.post('/api/auth/login', async (req, res) => {
    // ... logic same as before ...
});

// Protect all other api routes
app.use('/api', (req, res, next) => {
    // Exclude login and health checks/crons if needed
    if (req.path === '/auth/login' || req.path === '/scheduler/check' || req.path === '/webhooks/fire') {
        return next();
    }
    authenticateToken(req, res, next);
});

// --- EMPLOYEES ---
app.get('/api/employees', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM employees ORDER BY name ASC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/employees', async (req, res) => {
    const { name, phone } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO employees (name, phone) VALUES ($1, $2) RETURNING *',
            [name, phone]
        );
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/employees/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM employees WHERE id = $1', [req.params.id]);
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        if (err.code === '23503') {
            return res.status(400).json({ error: 'Não é possível excluir um funcionário que possui eventos vinculados. Remova ou altere os eventos antes de excluir o funcionário.' });
        }
        res.status(500).json({ error: err.message });
    }
});

// --- EVENTS ---
app.get('/api/events', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM events ORDER BY start_date ASC, event_time ASC');
        const events = rows.map(r => ({
            id: r.id,
            projectName: r.project_name,
            startDate: r.start_date instanceof Date ? r.start_date.toISOString().split('T')[0] : r.start_date,
            eventTime: r.event_time,
            location: r.location,
            observation: r.observation,
            responsible: r.responsible,
            webhookUrl: r.webhook_url,
            webhookMode: r.webhook_mode,
            options: r.options,
            employeeId: r.employee_id,
            status: r.status,
            triggers: r.triggers
        }));
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/events', async (req, res) => {
    const { projectName, startDate, eventTime, location, observation, responsible, webhookUrl, webhookMode, options, employeeId, status, triggers } = req.body;
    try {
        const { rows } = await db.query(
            `INSERT INTO events 
      (project_name, start_date, event_time, location, observation, responsible, webhook_url, webhook_mode, options, employee_id, status, triggers) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
            [projectName, startDate, eventTime, location, observation, responsible, webhookUrl, webhookMode, JSON.stringify(options), employeeId, status, JSON.stringify(triggers)]
        );
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/events/:id', async (req, res) => {
    const { projectName, startDate, eventTime, location, observation, responsible, webhookUrl, webhookMode, options, employeeId, status, triggers } = req.body;
    try {
        const { rows } = await db.query(
            `UPDATE events SET 
      project_name = $1, start_date = $2, event_time = $3, location = $4, observation = $5, 
      responsible = $6, webhook_url = $7, webhook_mode = $8, options = $9, employee_id = $10, 
      status = $11, triggers = $12 
      WHERE id = $13 RETURNING *`,
            [projectName, startDate, eventTime, location, observation, responsible, webhookUrl, webhookMode, JSON.stringify(options), employeeId, status, JSON.stringify(triggers), req.params.id]
        );
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/events/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM events WHERE id = $1', [req.params.id]);
        res.json({ message: 'Event deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- SETTINGS ---
app.get('/api/settings/:key', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT value FROM settings WHERE key = $1', [req.params.key]);
        res.json(rows[0]?.value || {});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/settings/:key', async (req, res) => {
    try {
        await db.query(
            'INSERT INTO settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO UPDATE SET value = $2',
            [req.params.key, JSON.stringify(req.body)]
        );
        res.json({ message: 'Settings updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- HISTORY ---
app.get('/api/history', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM history ORDER BY time DESC LIMIT 50');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/history', async (req, res) => {
    const { event_id, event_name, status, response, type, recipient } = req.body;
    try {
        await db.query(
            'INSERT INTO history (event_id, event_name, status, response, type, recipient) VALUES ($1, $2, $3, $4, $5, $6)',
            [event_id, event_name, status, response, type, recipient]
        );
        res.json({ message: 'History added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- WEBHOOKS & SCHEDULER (Server-side) ---

app.post('/api/webhooks/fire', async (req, res) => {
    const { targetUrl, payload } = req.body;
    try {
        const response = await fetch(targetUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        const responseData = {
            ok: response.ok,
            status: response.status,
            statusText: response.statusText
        };
        
        res.json(responseData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/scheduler/check', async (req, res) => {
    try {
        const now = new Date();
        const { rows: events } = await db.query('SELECT * FROM events WHERE status = $1', ['Agendado']);
        let firedCount = 0;

        for (const event of events) {
            let eventUpdated = false;
            let triggers = event.triggers;
            
            for (let trigger of triggers) {
                const triggerDate = new Date(trigger.time);
                if (!trigger.fired && now >= triggerDate) {
                    trigger.fired = true;
                    eventUpdated = true;
                    firedCount++;

                    // Fire Webhook
                    const { rows: employees } = await db.query('SELECT * FROM employees WHERE id = $1', [event.employee_id]);
                    const employee = employees[0];
                    const { rows: settingsRows } = await db.query('SELECT value FROM settings WHERE key = $1', ['webhook_settings']);
                    const webhookSettings = settingsRows[0]?.value || {};

                    let targetUrl = event.webhook_url;
                    if (event.webhook_mode === 'production') targetUrl = webhookSettings.productionUrl;
                    else if (event.webhook_mode === 'test') targetUrl = webhookSettings.testUrl;

                    if (targetUrl) {
                        const payload = {
                            evento: event.project_name,
                            data: event.start_date instanceof Date ? event.start_date.toISOString().split('T')[0] : event.start_date,
                            hora: event.event_time,
                            local: event.location,
                            observacao: event.observation,
                            responsavel: event.responsible,
                            funcionario_nome: employee ? employee.name : 'Não informado',
                            funcionario_telefone: employee ? employee.phone : 'Não informado',
                            tipo_disparo: trigger.type,
                            timestamp_disparo: new Date().toISOString(),
                            sistema: "DECOM - Controle de Tarefas"
                        };

                        try {
                            const response = await fetch(targetUrl, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(payload)
                            });

                            const historyEntry = {
                                event_id: event.id,
                                event_name: event.project_name,
                                status: response.ok ? 'Sucesso' : `Erro ${response.status}`,
                                response: response.ok ? 'Webhook disparado (server-side via Cron)' : `Falha no disparo: ${response.statusText}`,
                                type: trigger.type,
                                recipient: targetUrl
                            };

                            await db.query(
                                'INSERT INTO history (event_id, event_name, status, response, type, recipient) VALUES ($1, $2, $3, $4, $5, $6)',
                                [historyEntry.event_id, historyEntry.event_name, historyEntry.status, historyEntry.response, historyEntry.type, historyEntry.recipient]
                            );
                        } catch (err) {
                            console.error("Cron webhook fire error:", err);
                        }
                    }
                }
            }

            if (eventUpdated) {
                console.log(`Updating database for ${event.project_name}...`);
                const allFired = triggers.every(t => t.fired);
                const query = allFired 
                    ? 'UPDATE events SET triggers = $1, status = $2 WHERE id = $3'
                    : 'UPDATE events SET triggers = $1 WHERE id = $2';
                const params = allFired 
                    ? [JSON.stringify(triggers), 'Concluído', event.id]
                    : [JSON.stringify(triggers), event.id];
                
                const result = await db.query(query, params);
                console.log(`Update ${event.id}:`, result.rowCount > 0 ? "SUCCESS" : "FAILED", allFired ? "(Marked as Concluído)" : "");
            }
        }

        res.json({ message: 'Scheduler check completed', fired: firedCount });
    } catch (err) {
        console.error("Cron error:", err);
        res.status(500).json({ error: err.message });
    }
});

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

export default app;
