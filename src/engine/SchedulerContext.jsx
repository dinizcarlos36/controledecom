import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const SchedulerContext = createContext();

const API_URL = '/api';

export const useScheduler = () => useContext(SchedulerContext);

export const SchedulerProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [history, setHistory] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [webhookSettings, setWebhookSettings] = useState({
        productionUrl: '',
        testUrl: '',
        defaultMode: 'production'
    });

    const [nextUpdate, setNextUpdate] = useState(60);
    const [motorActive, setMotorActive] = useState(true);

    // Initial Fetch
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [evRes, histRes, empRes, settRes] = await Promise.all([
                    fetch(`${API_URL}/events`),
                    fetch(`${API_URL}/history`),
                    fetch(`${API_URL}/employees`),
                    fetch(`${API_URL}/settings/webhook_settings`)
                ]);

                if (evRes.ok) setEvents(await evRes.json());
                if (histRes.ok) {
                    const raw = await histRes.json();
                    setHistory(raw.map(h => ({
                        id: h.id,
                        eventId: h.event_id,
                        eventName: h.event_name,
                        timestamp: h.time,
                        status: h.status,
                        success: h.status === 'Sucesso',
                        response: h.response,
                        triggerType: h.type,
                        recipient: h.recipient
                    })));
                }
                if (empRes.ok) setEmployees(await empRes.json());
                if (settRes.ok) setWebhookSettings(await settRes.json());
            } catch (err) {
                console.error("Error fetching data from API:", err);
            }
        };
        fetchData();
    }, []);

    // Persistence - Removed as data is now fetched from API

    const addEvent = async (event) => {
        const newEvent = {
            ...event,
            status: 'Agendado',
            triggers: calculateTriggers(event.startDate, event.eventTime, event.options)
        };

        try {
            const res = await fetch(`${API_URL}/events`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEvent)
            });
            if (res.ok) {
                const savedEvent = await res.json();
                setEvents(prev => [...prev, savedEvent]);
            }
        } catch (err) {
            console.error("Error adding event:", err);
        }
    };

    const addEmployee = async (employee) => {
        try {
            const res = await fetch(`${API_URL}/employees`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...employee, id: undefined })
            });
            if (res.ok) {
                const saved = await res.json();
                setEmployees(prev => [...prev, saved]);
            }
        } catch (err) {
            console.error("Error adding employee:", err);
        }
    };

    const deleteEmployee = async (id) => {
        try {
            const res = await fetch(`${API_URL}/employees/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setEmployees(prev => prev.filter(e => e.id !== id));
            } else {
                const data = await res.json();
                alert(data.error || "Erro ao excluir funcionário");
            }
        } catch (err) {
            console.error("Error deleting employee:", err);
            alert("Erro de conexão com o servidor");
        }
    };

    const deleteEvent = async (id) => {
        try {
            const res = await fetch(`${API_URL}/events/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setEvents(prev => prev.filter(e => e.id !== id));
            }
        } catch (err) {
            console.error("Error deleting event:", err);
        }
    };

    const updateEvent = async (id, updatedData) => {
        const eventToUpdate = events.find(e => e.id === id);
        const newData = { ...eventToUpdate, ...updatedData };

        if (updatedData.startDate || updatedData.eventTime || updatedData.options) {
            newData.triggers = calculateTriggers(newData.startDate, newData.eventTime, newData.options);
            newData.status = 'Agendado';
        }

        try {
            const res = await fetch(`${API_URL}/events/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newData)
            });
            if (res.ok) {
                const updated = await res.json();
                setEvents(prev => prev.map(e => e.id === id ? updated : e));
            }
        } catch (err) {
            console.error("Error updating event:", err);
        }
    };

    const updateWebhookSettings = async (newSettings) => {
        try {
            const res = await fetch(`${API_URL}/settings/webhook_settings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSettings)
            });
            if (res.ok) {
                setWebhookSettings(newSettings);
            }
        } catch (err) {
            console.error("Error updating settings:", err);
        }
    };

    const calculateTriggers = (date, time, options) => {
        // date: YYYY-MM-DD, time: HH:mm
        const eventDate = new Date(`${date}T${time}`);

        return options.map(option => {
            let triggerTime = new Date(eventDate);

            switch (option) {
                case '7d': triggerTime.setDate(triggerTime.getDate() - 7); break;
                case '3d': triggerTime.setDate(triggerTime.getDate() - 3); break;
                case '2d': triggerTime.setDate(triggerTime.getDate() - 2); break;
                case '1d': triggerTime.setDate(triggerTime.getDate() - 1); break;
                case '12h': triggerTime.setHours(triggerTime.getHours() - 12); break;
                case '6h': triggerTime.setHours(triggerTime.getHours() - 6); break;
                case '2h': triggerTime.setHours(triggerTime.getHours() - 2); break;
                case '1h': triggerTime.setHours(triggerTime.getHours() - 1); break;
                case '30m': triggerTime.setMinutes(triggerTime.getMinutes() - 30); break;
                case '15m': triggerTime.setMinutes(triggerTime.getMinutes() - 15); break;
                case '5m': triggerTime.setMinutes(triggerTime.getMinutes() - 5); break;
                case 'exact': break;
                default:
                    if (option.startsWith('custom_')) {
                        const mins = parseInt(option.split('_')[1]);
                        triggerTime.setMinutes(triggerTime.getMinutes() - mins);
                    }
            }

            return {
                type: option,
                time: triggerTime.toISOString(),
                fired: false
            };
        });
    };

    const fireWebhook = async (event, trigger) => {
        const employee = employees.find(e => e.id === event.employeeId);

        // Resolve Webhook URL
        let targetUrl = event.webhookUrl; // Fallback to custom
        if (event.webhookMode === 'production') targetUrl = webhookSettings.productionUrl;
        else if (event.webhookMode === 'test') targetUrl = webhookSettings.testUrl;

        if (!targetUrl) {
            console.error("No valid webhook URL found for event:", event.projectName);
            return false;
        }

        const payload = {
            evento: event.projectName,
            data: event.startDate,
            hora: event.eventTime,
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
            // FIRE VIA BACKEND to avoid CORS/Mixed Content issues on Vercel
            const response = await fetch(`${API_URL}/webhooks/fire`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ targetUrl, payload })
            });

            const data = await response.json();

            const historyEntry = {
                event_id: event.id,
                event_name: event.projectName,
                time: new Date().toISOString(),
                status: data.ok ? 'Sucesso' : `Erro ${data.status || 'Server'}`,
                response: data.ok ? 'Webhook disparado (via Server)' : `Falha no disparo: ${data.statusText || data.error}`,
                type: trigger.type
            };

            try {
                await fetch(`${API_URL}/history`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(historyEntry)
                });
                // Update local history
                const histRes = await fetch(`${API_URL}/history`);
                if (histRes.ok) {
                    const raw = await histRes.json();
                    setHistory(raw.map(h => ({
                        id: h.id,
                        eventId: h.event_id,
                        eventName: h.event_name,
                        timestamp: h.time,
                        status: h.status,
                        success: h.status === 'Sucesso',
                        response: h.response,
                        triggerType: h.type,
                        recipient: h.recipient
                    })));
                }
            } catch (err) {
                console.error("Error saving history:", err);
            }
            return data.ok;
        } catch (error) {
            console.error("Webhook firing error:", error);
            return false;
        }
    };

    // Scheduler Loop - DISABLED to prevent duplicate firings
    // All automatic webhook firing is handled by the backend cron job (/api/scheduler/check)
    // The frontend only handles manual firing via the fireWebhook function above
    const checkTriggers = useCallback(async () => {
        // Intentionally empty - automatic firing disabled in frontend
    }, []);

    useEffect(() => {
        // Motor disabled - cron job handles auto-firing
        setMotorActive(false);
    }, []);

    return (
        <SchedulerContext.Provider value={{
            events,
            history,
            employees,
            webhookSettings,
            addEvent,
            deleteEvent,
            updateEvent,
            addEmployee,
            deleteEmployee,
            updateWebhookSettings,
            motorActive,
            setMotorActive,
            nextUpdate,
            fireWebhook
        }}>
            {children}
        </SchedulerContext.Provider>
    );
};
