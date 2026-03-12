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
                    if (!h.timestamp) return false;
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
                                <div key={item.id} className={`history-card-mini ${item.success ? 'card-success' : 'card-error'}`}>
                                    <div className="card-mini-header">
                                        <div className="card-mini-title-row">
                                            <span className="card-mini-event">{item.eventName}</span>
                                            <span className="card-mini-time">{new Date(item.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                        <div className="card-mini-date">{new Date(item.timestamp).toLocaleDateString('pt-BR')}</div>
                                    </div>
                                    
                                    <div className="card-mini-body">
                                        <div className="card-mini-line">
                                            <span className="mini-label">Para:</span>
                                            <span className="mini-value truncate">{item.recipient || 'URL não registrada'}</span>
                                        </div>
                                        <div className="card-mini-line">
                                            <span className="mini-label">Conteúdo:</span>
                                            <span className="mini-value italic">"{item.response}"</span>
                                        </div>
                                    </div>

                                    <div className="card-mini-footer">
                                        <span className={`mini-status-text ${item.success ? 'text-success' : 'text-danger'}`}>
                                            {item.success ? '✓ Enviado com sucesso' : '✕ Falha no envio'}
                                        </span>
                                        <span className="mini-trigger-type">{item.triggerType}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="dashboard-side">
                    <div className="promo-card">
                        <h4>Atalhos Rápidos</h4>
                        <div className="quick-actions-grid">
                            <button className="action-tile" onClick={onAddClick}>
                                <PlusCircle size={20} />
                                <span>Novo Evento</span>
                            </button>
                        </div>
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

        /* ... (stat classes maintained) */

        .history-mini-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .history-card-mini {
          background-color: var(--bg-medium);
          border-radius: 10px;
          padding: 16px;
          border-left: 4px solid transparent;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .history-card-mini:hover {
          transform: translateX(4px);
        }

        .card-success {
          border-left: 6px solid var(--success);
          background: linear-gradient(to right, rgba(29, 184, 119, 0.1), var(--bg-medium));
          box-shadow: 0 4px 12px rgba(29, 184, 119, 0.1);
        }

        .card-success:hover {
          box-shadow: 0 4px 15px rgba(29, 184, 119, 0.2);
          background: linear-gradient(to right, rgba(29, 184, 119, 0.15), var(--bg-medium));
        }

        .card-error {
          border-left: 6px solid var(--danger-soft);
          background: linear-gradient(to right, rgba(232, 64, 74, 0.1), var(--bg-medium));
          box-shadow: 0 4px 12px rgba(232, 64, 74, 0.1);
        }

        .card-error:hover {
          box-shadow: 0 4px 15px rgba(232, 64, 74, 0.2);
          background: linear-gradient(to right, rgba(232, 64, 74, 0.15), var(--bg-medium));
        }

        .card-mini-header {
          display: flex;
          flex-direction: column;
        }

        .card-mini-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-mini-event {
          font-weight: 700;
          color: white;
          font-size: 15px;
        }

        .card-mini-time {
          font-size: 12px;
          color: var(--primary);
          font-weight: 600;
        }

        .card-mini-date {
          font-size: 10px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-mini-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 8px;
          background-color: var(--bg-deep);
          border-radius: 6px;
        }

        .card-mini-line {
          display: flex;
          gap: 8px;
          font-size: 12px;
          align-items: baseline;
        }

        .mini-label {
          color: var(--text-muted);
          min-width: 65px;
          font-size: 11px;
          text-transform: uppercase;
        }

        .mini-value {
          color: white;
          flex: 1;
        }

        .truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-mini-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 4px;
        }

        .mini-status-text {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .text-success { color: var(--success); }
        .text-danger { color: var(--danger-soft); }

        .mini-trigger-type {
          font-size: 10px;
          color: var(--text-muted);
          background-color: var(--bg-light);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .quick-actions-grid {
          margin-top: 16px;
        }

        .action-tile {
          width: 100%;
          background-color: var(--primary);
          color: var(--bg-deep);
          border: none;
          padding: 12px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.2s;
        }

        .action-tile:hover {
          background-color: var(--primary-soft);
          transform: translateY(-2px);
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
