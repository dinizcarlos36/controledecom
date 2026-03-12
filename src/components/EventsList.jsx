import React from 'react';
import { useScheduler } from '../engine/SchedulerContext';
import { Trash2, Edit, ExternalLink, Clock, Play } from 'lucide-react';

const EventsList = ({ onEdit }) => {
  const { events, deleteEvent, fireWebhook } = useScheduler();

  const handleManualTest = async (event) => {
    const manualTrigger = {
      type: 'Manual/Teste',
      time: new Date().toISOString(),
      fired: true
    };
    await fireWebhook(event, manualTrigger);
    alert(`Disparo de teste enviado para: ${event.projectName}`);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Agendado': return <span className="badge badge-scheduled">Agendado</span>;
      case 'Disparado': return <span className="badge badge-fired">Disparado</span>;
      case 'Erro': return <span className="badge badge-error">Erro</span>;
      default: return <span className="badge badge-pending">Pendente</span>;
    }
  };

  const getUpcomingTrigger = (triggers) => {
    const upcoming = triggers.find(t => !t.fired);
    if (!upcoming) return 'Nenhum';
    const date = new Date(upcoming.time);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="table-container fade-in">
      <table className="events-table">
        <thead>
          <tr>
            <th>Data/Hora</th>
            <th>Evento</th>
            <th>Local</th>
            <th>Responsável</th>
            <th>Próximo Disparo</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {events.length === 0 ? (
            <tr>
              <td colSpan="7" className="empty-state">Nenhum evento agendado</td>
            </tr>
          ) : (
            events.map(event => (
              <tr key={event.id} className="event-row">
                <td>
                  <div className="cell-primary">{event.startDate}</div>
                  <div className="cell-secondary">{event.eventTime}</div>
                </td>
                <td>
                  <div className="cell-primary">{event.projectName}</div>
                  <div className="webhook-link">
                    <ExternalLink size={10} />
                    <span>Webhook configurado</span>
                  </div>
                </td>
                <td>{event.location}</td>
                <td>{event.responsible}</td>
                <td>
                  <div className="upcoming-trigger">
                    <Clock size={12} className="text-primary" />
                    <span>{getUpcomingTrigger(event.triggers)}</span>
                  </div>
                </td>
                <td>{getStatusBadge(event.status)}</td>
                <td className="actions-cell">
                  <button
                    className="btn-icon btn-test"
                    title="Disparo de Teste"
                    onClick={() => handleManualTest(event)}
                  >
                    <Play size={16} />
                  </button>
                  <button
                    className="btn-icon btn-edit"
                    title="Editar"
                    onClick={() => onEdit(event)}
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    className="btn-icon btn-delete"
                    title="Excluir"
                    onClick={() => deleteEvent(event.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <style jsx>{`
        .table-container {
          background-color: var(--bg-medium);
          border-radius: 8px;
          border: 1px solid var(--bg-light);
          overflow: hidden;
        }

        .events-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        th {
          background-color: var(--bg-deep);
          padding: 16px 24px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--primary);
          font-weight: 700;
        }

        td {
          padding: 16px 24px;
          border-bottom: 1px solid var(--bg-light);
          font-size: 14px;
          vertical-align: middle;
        }

        .event-row {
          background-color: var(--bg-medium);
          transition: background-color 0.15s;
        }

        .event-row:nth-child(even) {
          background-color: var(--bg-content);
        }

        .event-row:hover {
          background-color: var(--bg-light);
        }

        .cell-primary {
          font-weight: 500;
          color: white;
        }

        .cell-secondary {
          font-size: 12px;
          color: var(--text-muted);
        }

        .webhook-link {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          color: var(--primary);
          margin-top: 4px;
        }

        .badge {
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          border: 1px solid transparent;
        }

        .badge-scheduled {
          background-color: rgba(245, 168, 0, 0.15);
          color: var(--primary);
          border-color: var(--primary);
        }

        .badge-fired {
          background-color: rgba(29, 184, 119, 0.15);
          color: var(--success);
          border-color: var(--success);
        }

        .badge-error {
          background-color: rgba(232, 64, 74, 0.15);
          color: var(--danger-soft);
          border-color: var(--danger-soft);
        }

        .upcoming-trigger {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }

        .actions-cell {
          display: flex;
          gap: 8px;
        }

        .btn-icon {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 6px;
          border-radius: 4px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-edit:hover {
          color: var(--primary);
          background: rgba(245, 168, 0, 0.1);
        }

        .btn-test:hover {
          color: var(--success);
          background: rgba(29, 184, 119, 0.1);
        }

        .btn-delete:hover {
          color: var(--danger-soft);
          background: rgba(192, 32, 42, 0.1);
        }

        .empty-state {
          text-align: center;
          color: var(--text-muted);
          padding: 48px;
        }
      `}</style>
    </div>
  );
};

export default EventsList;
