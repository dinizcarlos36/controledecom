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

                            <div className="timeline-content">
                                <div className="item-header">
                                    <div className="item-title-row">
                                        <span className="item-event-name">{item.eventName}</span>
                                        <span className={`status-badge ${item.success ? 'badge-success' : 'badge-error'}`}>
                                            HTTP {item.status}
                                        </span>
                                    </div>
                                    <span className="item-timestamp">
                                        {new Date(item.timestamp).toLocaleString('pt-BR')}
                                    </span>
                                </div>

                                <div className="item-details">
                                    <div className="detail-row">
                                        <span className="detail-label">Tipo de Antecedência:</span>
                                        <span className="detail-value">{item.triggerType}</span>
                                    </div>
                                </div>

                                {!item.success && (
                                    <div className="item-actions">
                                        <button className="btn-resend" onClick={() => handleResend(item)}>
                                            <RefreshCcw size={14} />
                                            Reenviar Disparo
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
          max-width: 800px;
          margin: 0 auto;
        }

        .history-timeline {
          padding: 24px 0;
        }

        .timeline-item {
          display: flex;
          gap: 24px;
          margin-bottom: 0;
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
        }

        .marker-success {
          background-color: rgba(29, 184, 119, 0.1);
          color: var(--success);
          border: 1px solid var(--success);
        }

        .marker-error {
          background-color: rgba(192, 32, 42, 0.1);
          color: var(--danger-soft);
          border: 1px solid var(--danger-soft);
        }

        .marker-line {
          width: 2px;
          flex: 1;
          background-color: var(--bg-light);
          min-height: 100px;
        }

        .timeline-content {
          flex: 1;
          background-color: var(--bg-medium);
          border: 1px solid var(--bg-light);
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 40px;
          position: relative;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .item-title-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .item-event-name {
          font-weight: 700;
          color: white;
          font-size: 16px;
        }

        .status-badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          width: fit-content;
        }

        .badge-success { background-color: var(--bg-deep); color: var(--success); }
        .badge-error { background-color: var(--bg-deep); color: var(--danger-soft); }

        .item-timestamp {
          font-size: 11px;
          color: var(--text-muted);
        }

        .item-details {
            padding: 12px;
            background-color: var(--bg-deep);
            border-radius: 6px;
            margin-bottom: 16px;
        }

        .detail-row {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
        }

        .detail-label { color: var(--text-muted); }
        .detail-value { color: white; font-weight: 500; }

        .item-actions {
            display: flex;
            justify-content: flex-end;
        }

        .btn-resend {
            background-color: transparent;
            border: 1px solid var(--primary);
            color: var(--primary);
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .btn-resend:hover {
            background-color: var(--primary);
            color: var(--bg-deep);
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
