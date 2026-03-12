import React, { useState } from 'react';
import { useScheduler } from '../engine/SchedulerContext';
import { UserPlus, Trash2, Phone, User } from 'lucide-react';

const EmployeesList = () => {
    const { employees, addEmployee, deleteEmployee } = useScheduler();
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(formData);
        setFormData({ name: '', phone: '' });
    };

    return (
        <div className="employees-container fade-in">
            <div className="employees-grid">
                <div className="employee-form-container">
                    <div className="card">
                        <h3 className="card-title">Cadastrar Funcionário</h3>
                        <form onSubmit={handleSubmit} className="employee-form">
                            <div className="form-group">
                                <label>Nome Completo</label>
                                <div className="input-with-icon">
                                    <User size={16} className="input-icon" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Ex: João Silva"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Telefone / WhatsApp</label>
                                <div className="input-with-icon">
                                    <Phone size={16} className="input-icon" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Ex: (11) 98888-7777"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn-primary full-width">
                                <UserPlus size={18} />
                                Adicionar Funcionário
                            </button>
                        </form>
                    </div>
                </div>

                <div className="employees-list-container">
                    <div className="card">
                        <h3 className="card-title">Lista de Funcionários</h3>
                        <div className="employee-list">
                            {employees.length === 0 ? (
                                <div className="empty-state">Nenhum funcionário cadastrado</div>
                            ) : (
                                employees.map(emp => (
                                    <div key={emp.id} className="employee-item">
                                        <div className="emp-avatar">
                                            {emp.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="emp-info">
                                            <span className="emp-name">{emp.name}</span>
                                            <span className="emp-phone">{emp.phone}</span>
                                        </div>
                                        <button
                                            className="btn-icon btn-delete"
                                            onClick={() => deleteEmployee(emp.id)}
                                            title="Remover"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .employees-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 32px;
                    align-items: start;
                }

                .card {
                    background-color: var(--bg-medium);
                    border: 1px solid var(--bg-light);
                    border-radius: 8px;
                    padding: 24px;
                }

                .card-title {
                    font-size: 14px;
                    color: var(--primary);
                    margin-bottom: 24px;
                }

                .employee-form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .form-group label {
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-muted);
                }

                .input-with-icon {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .input-icon {
                    position: absolute;
                    left: 12px;
                    color: var(--text-muted);
                }

                input {
                    width: 100%;
                    background-color: var(--bg-deep);
                    border: 1px solid var(--bg-light);
                    color: white;
                    padding: 10px 16px 10px 40px;
                    border-radius: 6px;
                    font-family: var(--font-body);
                    font-size: 14px;
                    transition: all 0.2s ease;
                }

                input:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(245, 168, 0, 0.2);
                }

                .btn-primary {
                    background-color: var(--primary);
                    color: var(--bg-deep);
                    border: none;
                    padding: 12px 24px;
                    border-radius: 6px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .btn-primary:hover {
                    background-color: var(--primary-soft);
                    transform: scale(1.01);
                }

                .full-width { width: 100%; }

                .employee-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .employee-item {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 12px 16px;
                    background-color: var(--bg-deep);
                    border: 1px solid var(--bg-light);
                    border-radius: 6px;
                    transition: border-color 0.2s;
                }

                .employee-item:hover {
                    border-color: var(--primary);
                }

                .emp-avatar {
                    width: 36px;
                    height: 36px;
                    background-color: var(--primary);
                    color: var(--bg-deep);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 14px;
                }

                .emp-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .emp-name {
                    font-size: 14px;
                    color: white;
                    font-weight: 500;
                }

                .emp-phone {
                    font-size: 12px;
                    color: var(--text-muted);
                }

                .btn-icon {
                    background: transparent;
                    border: none;
                    color: var(--text-muted);
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 4px;
                    transition: all 0.2s;
                }

                .btn-delete:hover {
                    color: var(--danger-soft);
                    background: rgba(192, 32, 42, 0.1);
                }

                .empty-state {
                    text-align: center;
                    color: var(--text-muted);
                    padding: 32px;
                    font-size: 13px;
                }
            `}</style>
        </div>
    );
};

export default EmployeesList;
