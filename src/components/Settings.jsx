import React, { useState } from 'react';
import { useScheduler } from '../engine/SchedulerContext';
import { Save, Globe, FlaskConical, CheckCircle2 } from 'lucide-react';

const Settings = () => {
    const { webhookSettings, updateWebhookSettings } = useScheduler();
    const [formData, setFormData] = useState({ ...webhookSettings });
    const [saved, setSaved] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateWebhookSettings(formData);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="settings-container fade-in">
            <div className="card settings-card">
                <h3 className="card-title">Configurações Globais de Webhook</h3>
                <p className="card-subtitle">
                    Configure as URLs padrão para evitar repetição no cadastro de eventos.
                </p>

                <form onSubmit={handleSubmit} className="settings-form">
                    <div className="form-group">
                        <label>URL de Produção (Oficial)</label>
                        <div className="input-with-icon">
                            <Globe size={16} className="input-icon text-primary" />
                            <input
                                type="url"
                                placeholder="https://seu-n8n.com/webhook/producao"
                                value={formData.productionUrl}
                                onChange={e => setFormData({ ...formData, productionUrl: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>URL de Teste / Desenvolvimento</label>
                        <div className="input-with-icon">
                            <FlaskConical size={16} className="input-icon text-test" />
                            <input
                                type="url"
                                placeholder="https://webhook.site/seu-id-de-teste"
                                value={formData.testUrl}
                                onChange={e => setFormData({ ...formData, testUrl: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Modo Padrão no Cadastro</label>
                        <div className="radio-group">
                            <label className={`radio-item ${formData.defaultMode === 'production' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="defaultMode"
                                    value="production"
                                    checked={formData.defaultMode === 'production'}
                                    onChange={() => setFormData({ ...formData, defaultMode: 'production' })}
                                />
                                Produção
                            </label>
                            <label className={`radio-item ${formData.defaultMode === 'test' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="defaultMode"
                                    value="test"
                                    checked={formData.defaultMode === 'test'}
                                    onChange={() => setFormData({ ...formData, defaultMode: 'test' })}
                                />
                                Teste
                            </label>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-primary" disabled={saved}>
                            {saved ? (
                                <>
                                    <CheckCircle2 size={18} />
                                    Configurações Salvas!
                                </>
                            ) : (
                                <>
                                    <Save size={18} />
                                    Salvar Configurações
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>

            <style jsx>{`
                .settings-container {
                    max-width: 600px;
                    margin: 0 auto;
                }

                .settings-card {
                    background-color: var(--bg-medium);
                    border: 1px solid var(--bg-light);
                    border-radius: 8px;
                    padding: 32px;
                }

                .card-title {
                    font-size: 16px;
                    color: var(--primary);
                    margin-bottom: 8px;
                }

                .card-subtitle {
                    font-size: 13px;
                    color: var(--text-muted);
                    margin-bottom: 32px;
                }

                .settings-form {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
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
                    left: 14px;
                }

                .text-primary { color: var(--primary); }
                .text-test { color: var(--info); }

                input[type="url"] {
                    width: 100%;
                    background-color: var(--bg-deep);
                    border: 1px solid var(--bg-light);
                    color: white;
                    padding: 12px 16px 12px 42px;
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

                .radio-group {
                    display: flex;
                    gap: 12px;
                }

                .radio-item {
                    flex: 1;
                    padding: 12px;
                    background-color: var(--bg-deep);
                    border: 1px solid var(--bg-light);
                    border-radius: 6px;
                    text-align: center;
                    font-size: 13px;
                    color: var(--text-muted);
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .radio-item input {
                    display: none;
                }

                .radio-item:hover {
                    border-color: var(--bg-lighter);
                }

                .radio-item.active {
                    border-color: var(--primary);
                    color: var(--primary);
                    background-color: rgba(245, 168, 0, 0.05);
                }

                .form-actions {
                    margin-top: 16px;
                    display: flex;
                    justify-content: flex-end;
                }

                .btn-primary {
                    background-color: var(--primary);
                    color: var(--bg-deep);
                    border: none;
                    padding: 12px 32px;
                    border-radius: 6px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .btn-primary:hover:not(:disabled) {
                    background-color: var(--primary-soft);
                    transform: translateY(-1px);
                }

                .btn-primary:disabled {
                    background-color: var(--success);
                    color: white;
                    cursor: default;
                }
            `}</style>
        </div>
    );
};

export default Settings;
