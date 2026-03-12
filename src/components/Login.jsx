import React, { useState } from 'react';
import { Mail, Lock, LogIn, Loader2 } from 'lucide-react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                onLogin(data.token, data.user);
            } else {
                setError(data.error || 'Falha na autenticação');
            }
        } catch (err) {
            setError('Erro ao conectar com o servidor');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-card fade-in">
                <div className="login-header">
                    <div className="login-logo">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                            <path d="M4 4L12 12L4 20" stroke="#F5A800" strokeWidth="3" strokeLinecap="round" />
                            <path d="M12 4L20 12L12 20" stroke="#F5A800" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                        </svg>
                    </div>
                    <h1>DECOM</h1>
                    <p>Controle de Tarefas</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    {error && <div className="login-error">{error}</div>}
                    
                    <div className="form-group">
                        <label>E-mail</label>
                        <div className="input-with-icon">
                            <Mail size={18} className="input-icon" />
                            <input
                                type="email"
                                required
                                placeholder="exemplo@gmail.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Senha</label>
                        <div className="input-with-icon">
                            <Lock size={18} className="input-icon" />
                            <input
                                type="password"
                                required
                                placeholder="••••••••"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-login" disabled={loading}>
                        {loading ? (
                            <Loader2 className="spinner" size={18} />
                        ) : (
                            <>
                                <LogIn size={18} />
                                Entrar no Painel
                            </>
                        )}
                    </button>
                    
                    <div className="login-footer">
                        Desenvolvido para uso exclusivo da DECOM
                    </div>
                </form>
            </div>

            <style jsx>{`
                .login-page {
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--bg-deep);
                }

                .login-card {
                    width: 100%;
                    max-width: 400px;
                    background-color: var(--bg-medium);
                    border: 1px solid var(--bg-light);
                    border-radius: 12px;
                    padding: 40px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }

                .login-header {
                    text-align: center;
                    margin-bottom: 32px;
                }

                .login-logo {
                    margin-bottom: 16px;
                }

                .login-header h1 {
                    font-size: 28px;
                    font-weight: 800;
                    color: white;
                    margin: 0;
                    letter-spacing: -0.02em;
                }

                .login-header p {
                    font-size: 14px;
                    color: var(--primary);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-top: 4px;
                }

                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .login-error {
                    background-color: rgba(232, 64, 74, 0.1);
                    color: var(--danger-soft);
                    border: 1px solid var(--danger-soft);
                    padding: 12px;
                    border-radius: 6px;
                    font-size: 13px;
                    text-align: center;
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
                    left: 14px;
                    color: var(--text-muted);
                    transition: color 0.2s;
                }

                input {
                    width: 100%;
                    background-color: var(--bg-deep);
                    border: 1px solid var(--bg-light);
                    color: white;
                    padding: 12px 16px 12px 42px;
                    border-radius: 6px;
                    font-family: var(--font-body);
                    font-size: 15px;
                    transition: all 0.2s ease;
                }

                input:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(245, 168, 0, 0.2);
                }

                input:focus + .input-icon {
                    color: var(--primary);
                }

                .btn-login {
                    background-color: var(--primary);
                    color: var(--bg-deep);
                    border: none;
                    padding: 14px;
                    border-radius: 6px;
                    font-weight: 700;
                    font-size: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .btn-login:hover:not(:disabled) {
                    background-color: var(--primary-soft);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(245, 168, 0, 0.3);
                }

                .btn-login:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .spinner {
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .login-footer {
                    margin-top: 16px;
                    text-align: center;
                    font-size: 11px;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
            `}</style>
        </div>
    );
};

export default Login;
