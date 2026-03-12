import React, { useState, useEffect } from 'react';
import { Clock, Activity } from 'lucide-react';

const Header = ({ title, motorActive, nextUpdate }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="main-header">
            <div className="header-left">
                <h2 className="section-title">{title}</h2>
            </div>

            <div className="header-right">
                <div className="motor-indicator">
                    <div className={`status-dot ${motorActive ? 'active animate-pulse-custom' : ''}`}></div>
                    <div className="motor-info">
                        <span className="motor-label">
                            {motorActive ? 'Motor Ativo' : 'Motor Pausado'}
                        </span>
                        <span className="motor-timer">
                            Próxima verificação em: {nextUpdate}s
                        </span>
                    </div>
                </div>

                <div className="vertical-divider"></div>

                <div className="time-display">
                    <Clock size={16} className="text-muted" />
                    <span>
                        {currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </span>
                </div>
            </div>

            <style jsx>{`
        .main-header {
          height: var(--header-height);
          background-color: var(--bg-deep);
          border-bottom: 1px solid var(--bg-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          position: sticky;
          top: 0;
          z-index: 90;
        }

        .section-title {
          font-size: 18px;
          color: var(--primary);
          margin: 0;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .motor-indicator {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--text-muted);
        }

        .status-dot.active {
          background-color: var(--primary);
          box-shadow: 0 0 8px var(--primary);
        }

        .motor-info {
          display: flex;
          flex-direction: column;
        }

        .motor-label {
          font-size: 12px;
          font-weight: 700;
          color: white;
          line-height: 1;
        }

        .motor-timer {
          font-size: 10px;
          color: var(--text-muted);
        }

        .vertical-divider {
          width: 1px;
          height: 24px;
          background-color: var(--bg-light);
        }

        .time-display {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-variant-numeric: tabular-nums;
          font-size: 14px;
        }
      `}</style>
        </header>
    );
};

export default Header;
