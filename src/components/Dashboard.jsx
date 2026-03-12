import React from 'react';
import { useScheduler } from '../engine/SchedulerContext';
import {
    CheckCircle2,
    AlertCircle,
    Clock,
    Layers,
    TrendingUp
} from 'lucide-react';

const Dashboard = ({ onAddClick }) => {
    const { events, history } = useScheduler();

    const stats = [
        {
            label: 'Total de Eventos',
            value: events.length,
            icon: Layers,
            color: 'var(--primary)',
            trend: 'Ativos no sistema'
        },
        {
            label: 'Agendados',
            value: events.filter(e => e.status === 'Agendado').length,
            icon: Clock,
            color: 'var(--primary)',
            trend: 'Aguardando disparo'
        },
        {
            label: 'Disparados Hoje',
            value: history.filter(h => {
                const hDate = new Date(h.timestamp).toDateString();
                const today = new Date().toDateString();
                return hDate === today && h.success;
            }).length,
            icon: CheckCircle2,
            color: 'var(--success)',
            trend: 'Sucesso'
        },
        {
            label: 'Erros Recentes',
            value: history.filter(h => !h.success).length,
            icon: AlertCircle,
            color: 'var(--danger-soft)',
            trend: 'Falhas registradas',
            urgent: true
        },
    ];

    const recentHistory = history.slice(0, 5);

    return (
        <div className="dashboard-container fade-in">
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className={`stat-card ${stat.urgent ? 'stat-urgent' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="stat-header">
                            <span className="stat-label">{stat.label}</span>
                            <stat.icon size={24} style={{ color: stat.color }} />
                        </div>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-footer">
                            <TrendingUp size={12} />
                            <span>{stat.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-grid">
                <div className="dashboard-main">
                    <div className="section-header">
                        <h3 className="section-title">Atividade Recente</h3>
                        <button className="btn-text">Ver tudo</button>
                    </div>
                    <div className="history-mini-list">
                        {recentHistory.length === 0 ? (
                            <div className="empty-mini">Nenhuma atividade recente registrada</div>
                        ) : (
                            recentHistory.map(item => (
                                <div key={item.id} className="history-mini-item">
                                    <div className={`status-indicator ${item.success ? 'bg-success' : 'bg-danger'}`}></div>
                                    <div className="history-info">
                                        <span className="history-name">{item.eventName}</span>
                                        <span className="history-meta">{item.triggerType} • {new Date(item.timestamp).toLocaleTimeString()}</span>
                                    </div>
                                    <div className="history-badge">
                                        {item.status}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="dashboard-side">
                    <div className="promo-card">
                        <h4>Novo Evento?</h4>
                        <p>Agende disparos automáticos para múltiplos canais via webhook.</p>
                        <button className="btn-primary-small" onClick={onAddClick}>Criar Agora</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stat-card {
          background-color: var(--bg-medium);
          border: 1px solid var(--bg-light);
          padding: 24px;
          border-radius: 8px;
          animation: fadeIn 0.4s ease-out forwards;
          opacity: 0;
        }

        .stat-urgent {
          border-top: 3px solid var(--danger);
        }

        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .stat-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }

        .stat-footer {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          color: var(--text-muted);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 32px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 14px;
          color: var(--primary);
        }

        .btn-text {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 11px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .history-mini-list {
          background-color: var(--bg-medium);
          border-radius: 8px;
          border: 1px solid var(--bg-light);
          overflow: hidden;
        }

        .history-mini-item {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid var(--bg-light);
          gap: 16px;
        }

        .history-mini-item:last-child {
          border-bottom: none;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .bg-success { background-color: var(--success); }
        .bg-danger { background-color: var(--danger-soft); }

        .history-info {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .history-name {
          font-size: 14px;
          color: white;
          font-weight: 500;
        }

        .history-meta {
          font-size: 11px;
          color: var(--text-muted);
        }

        .history-badge {
          font-size: 10px;
          background-color: var(--bg-deep);
          padding: 4px 8px;
          border-radius: 4px;
          color: var(--text-muted);
        }

        .promo-card {
          background-color: var(--bg-deep);
          border: 1px solid var(--bg-light);
          padding: 32px;
          border-radius: 8px;
          text-align: center;
        }

        .promo-card h4 {
          color: var(--primary);
          margin-bottom: 12px;
        }

        .promo-card p {
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .btn-primary-small {
          background-color: var(--primary);
          color: var(--bg-deep);
          border: none;
          padding: 8px 20px;
          border-radius: 4px;
          font-weight: 700;
          cursor: pointer;
        }

        .empty-mini {
          padding: 40px;
          text-align: center;
          color: var(--text-muted);
          font-size: 13px;
        }
      `}</style>
        </div>
    );
};

export default Dashboard;
