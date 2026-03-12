import React, { useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import EventsList from './components/EventsList'
import History from './components/History'
import EventForm from './components/EventForm'
import EmployeesList from './components/EmployeesList'
import Settings from './components/Settings'
import Login from './components/Login'
import { SchedulerProvider, useScheduler } from './engine/SchedulerContext'

function AppContent() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem('auth_token'));
    const [activeTab, setActiveTab] = useState('dashboard')
    const [editingEvent, setEditingEvent] = useState(null)
    const { motorActive, nextUpdate } = useScheduler()

    const handleLogin = (token, user) => {
        sessionStorage.setItem('auth_token', token);
        sessionStorage.setItem('auth_user', JSON.stringify(user));
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('auth_token');
        sessionStorage.removeItem('auth_user');
        setIsAuthenticated(false);
    };

    if (!isAuthenticated) {
        return <Login onLogin={handleLogin} />;
    }

    const getTitle = () => {
        switch (activeTab) {
            case 'dashboard': return 'Dashboard Geral'
            case 'events': return 'Gerenciamento de Eventos'
            case 'employees': return 'Gerenciamento de Funcionários'
            case 'history': return 'Histórico de Disparos'
            case 'settings': return 'Configurações de Webhook'
            case 'add-event': return editingEvent ? 'Editar Evento' : 'Novo Evento'
            default: return 'DECOM'
        }
    }

    return (
        <div className="app-container">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />
            <main className="main-content">
                <Header
                    title={getTitle()}
                    motorActive={motorActive}
                    nextUpdate={nextUpdate}
                />
                <div className="content-padding">
                    {activeTab === 'dashboard' && <Dashboard onAddClick={() => setActiveTab('add-event')} />}
                    {activeTab === 'events' && (
                        <EventsList
                            onEdit={(event) => {
                                setEditingEvent(event);
                                setActiveTab('add-event');
                            }}
                        />
                    )}
                    {activeTab === 'employees' && <EmployeesList />}
                    {activeTab === 'history' && <History />}
                    {activeTab === 'settings' && <Settings />}
                    {activeTab === 'add-event' && (
                        <EventForm
                            initialData={editingEvent}
                            onComplete={() => {
                                setEditingEvent(null);
                                setActiveTab('events');
                            }}
                        />
                    )}
                </div>
            </main>

            <style jsx>{`
        .app-container {
          display: flex;
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
          margin-left: var(--sidebar-width);
          background-color: var(--bg-content);
          min-height: 100vh;
        }
        .content-padding {
          padding: 32px;
        }
      `}</style>
        </div>
    )
}

function App() {
    return (
        <SchedulerProvider>
            <AppContent />
        </SchedulerProvider>
    )
}

export default App
