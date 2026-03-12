import React from 'react';
import { useScheduler } from '../engine/SchedulerContext';
import { RefreshCcw, CheckCircle2, XCircle, Info } from 'lucide-react';

const History = () => {
    const { history, fireWebhook, events } = useScheduler();

    const handleResend = async (item) => {
        const event = events.find(e => e.id === item.eventId);
        if (event) {
            const trigger = event.triggers.find(t => t.type === item.triggerType);
            if (trigger) {
                await fireWebhook(event, trigger);
            }
        }
    };

    return (
        <div className="history-container fade-in">
            <div className="history-timeline">
                {history.length === 0 ? (
                    <div className="empty-history">
                        <Info size={40} className="text-muted" />
                        <p>Nenhum disparo realizado ainda.</p>
                    </div>
                ) : (
                    history.map((item, index) => (
                        <div key={item.id} className="timeline-item">
                            <div className="timeline-marker">
                                <div className={`marker-dot ${item.success ? 'marker-success' : 'marker-error'}`}>
                                    {item.success ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                                </div>
                                {index !== history.length - 1 && <div className="marker-line"></div>}
                            </div>

                            <div className="timeline-content card-rich">
                                <div className={`history-card-header ${item.success ? 'bg-success-tint' : 'bg-error-tint'}`}>
                                    <div className="card-title-row">
                                        <h4 className="card-event-name">{item.eventName}</h4>
                                        <span className={`card-status-pill ${item.success ? 'pill-success' : 'pill-error'}`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <div className="card-meta-row">
                                        <span className="card-timestamp">
                                            {new Date(item.timestamp).toLocaleDateString('pt-BR')} às {new Date(item.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                        <span className="card-trigger-badge">{item.triggerType}</span>
                                    </div>
                                </div>

                                <div className="card-details-box">
                                    <div className="card-detail-line">
                                        <span className="card-detail-label">Destinatário:</span>
                                        <span className="card-detail-value">{item.recipient || 'URL não capturada'}</span>
                                    </div>
                                    <div className="card-detail-line">
                                        <span className="card-detail-label">Resposta/Conteúdo:</span>
                                        <span className={`card-detail-value italic ${item.success ? 'text-success' : 'text-danger'}`}>
                                            "{item.response}"
                                        </span>
                                    </div>
                                </div>

                                {!item.success && (
                                    <div className="card-actions">
                                        <button className="btn-resend-rich" onClick={() => handleResend(item)}>
                                            <RefreshCcw size={14} />
                                            Tentar Novamente
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <style jsx>{`
        .history-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .history-timeline {
          padding: 24px 0;
        }

        .timeline-item {
          display: flex;
          gap: 24px;
          margin-bottom: 32px;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 32px;
        }

        .marker-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          background-color: var(--bg-deep);
          border: 1px solid var(--bg-light);
        }

        .marker-success { color: var(--success); border-color: var(--success); }
        .marker-error { color: var(--danger-soft); border-color: var(--danger-soft); }

        .marker-line {
          width: 2px;
          flex: 1;
          background-color: var(--bg-light);
          min-height: 40px;
        }

        .timeline-content.card-rich {
          flex: 1;
          background-color: var(--bg-medium);
          border-radius: 12px;
          border: 1px solid var(--bg-light);
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .history-card-header {
          padding: 20px;
          border-bottom: 1px solid var(--bg-light);
        }

        .bg-success-tint { 
          border-left: 6px solid var(--success);
          background: linear-gradient(to right, rgba(29, 184, 119, 0.15), transparent);
        }
        .bg-error-tint { 
          border-left: 6px solid var(--danger-soft);
          background: linear-gradient(to right, rgba(232, 64, 74, 0.15), transparent);
        }

        .card-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .card-event-name {
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .card-status-pill {
          font-size: 10px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 20px;
          text-transform: uppercase;
        }

        .pill-success { background: rgba(29, 184, 119, 0.1); color: var(--success); }
        .pill-error { background: rgba(232, 64, 74, 0.1); color: var(--danger-soft); }

        .card-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-timestamp {
          font-size: 12px;
          color: var(--text-muted);
        }

        .card-trigger-badge {
          font-size: 11px;
          background: var(--bg-deep);
          color: var(--primary);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .card-details-box {
          padding: 20px;
          background: rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .card-detail-line {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .card-detail-label {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .card-detail-value {
          color: white;
          font-size: 14px;
          word-break: break-all;
        }

        .italic { font-style: italic; }
        .text-success { color: var(--success); }
        .text-danger { color: var(--danger-soft); }

        .card-actions {
          padding: 16px 20px;
          display: flex;
          justify-content: flex-end;
          background: var(--bg-deep);
        }

        .btn-resend-rich {
          background: var(--danger-soft);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .btn-resend-rich:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .empty-history {
          text-align: center;
          padding: 80px 0;
          color: var(--text-muted);
        }

        .empty-history p {
          margin-top: 16px;
        }
      `}</style>
        </div>
    );
};

export default History;
