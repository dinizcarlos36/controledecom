import React from 'react';
import {
  BarChart3,
  Calendar,
  History,
  PlusCircle,
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Bell
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'events', label: 'Eventos', icon: Calendar },
    { id: 'employees', label: 'Funcionários', icon: Users },
    { id: 'history', label: 'Histórico', icon: History },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 4L12 12L4 20" stroke="#F5A800" strokeWidth="3" strokeLinecap="round" />
            <path d="M12 4L20 12L12 20" stroke="#F5A800" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
        <div className="logo-text-group">
          <h1 className="logo-text">DECOM</h1>
          <span className="logo-subtext">Controle de Tarefas</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
            {activeTab === item.id && <div className="active-indicator" />}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-divider" />
        <button
          className="btn-add-quick"
          onClick={() => setActiveTab('add-event')}
        >
          <PlusCircle size={18} />
          <span>Novo Evento</span>
        </button>
        
        <div className="logout-section">
          <button
            className="btn-logout-prominent"
            onClick={() => {
              console.log("Logout clicked");
              if (onLogout) onLogout();
            }}
          >
            <LogOut size={18} />
            <span>Sair do Sistema</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .sidebar {
          width: var(--sidebar-width);
          height: 100vh;
          background-color: var(--bg-deep);
          position: fixed;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          padding: 24px 0;
          border-right: 1px solid var(--bg-light);
          z-index: 100;
        }

        .logo-container {
          padding: 0 24px;
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
        }

        .logo-text {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin: 0;
          line-height: 1;
        }

        .logo-subtext {
          font-size: 10px;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-top: 4px;
          border-top: 1px solid var(--primary);
          padding-top: 2px;
        }

        .sidebar-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nav-item {
          width: 100%;
          padding: 12px 24px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-muted);
          cursor: pointer;
          position: relative;
          transition: all 0.2s ease;
          font-family: var(--font-body);
          font-size: 14px;
        }

        .nav-item:hover {
          color: var(--primary);
          background: rgba(26, 74, 128, 0.2);
        }

        .nav-item.active {
          color: var(--primary);
          background: rgba(26, 74, 128, 0.4);
        }

        .active-indicator {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background-color: var(--primary);
          border-radius: 0 4px 4px 0;
        }

        .sidebar-footer {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background-color: var(--bg-deep);
        }

        .sidebar-divider {
          height: 1px;
          background: var(--bg-light);
          margin: 0 -16px;
          opacity: 0.5;
        }

        .logout-section {
          padding-top: 8px;
        }

        .btn-logout-prominent {
          width: 100%;
          background: rgba(232, 64, 74, 0.15);
          color: white;
          border: 1px solid var(--danger-soft);
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--font-body);
        }

        .btn-logout-prominent:hover {
          background: var(--danger-soft);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(232, 64, 74, 0.3);
        }

        .btn-add-quick {
          width: 100%;
          background-color: var(--primary);
          color: var(--bg-deep);
          border: none;
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-add-quick:hover {
          background-color: var(--primary-soft);
          transform: translateY(-2px);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
