import express from 'express';
import cors from 'cors';
import * as db from './db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

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
    const { event_id, event_name, status, response, type } = req.body;
    try {
        await db.query(
            'INSERT INTO history (event_id, event_name, status, response, type) VALUES ($1, $2, $3, $4, $5)',
            [event_id, event_name, status, response, type]
        );
        res.json({ message: 'History added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
