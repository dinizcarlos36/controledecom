import React, { useState } from 'react';
import { useScheduler } from '../engine/SchedulerContext';
import { Send, X } from 'lucide-react';

const EventForm = ({ onComplete, initialData }) => {
  const { addEvent, updateEvent, employees, webhookSettings } = useScheduler();
  const [formData, setFormData] = useState(initialData || {
    projectName: '',
    startDate: '',
    eventTime: '',
    location: '',
    observation: '',
    responsible: '',
    employeeId: '',
    webhookMode: webhookSettings.defaultMode || 'production',
    webhookUrl: '',
    options: ['exact']
  });

  const triggerOptions = [
    { id: '7d', label: '7 dias antes' },
    { id: '3d', label: '3 dias antes' },
    { id: '2d', label: '2 dias antes' },
    { id: '1d', label: '1 dia antes (24h)' },
    { id: '12h', label: '12 horas antes' },
    { id: '6h', label: '6 horas antes' },
    { id: '2h', label: '2 horas antes' },
    { id: '1h', label: '1 hora antes' },
    { id: '30m', label: '30 minutos antes' },
    { id: '15m', label: '15 minutos antes' },
    { id: '5m', label: '5 minutos antes' },
    { id: 'exact', label: 'No momento exato' },
  ];

  const handleToggleOption = (id) => {
    setFormData(prev => ({
      ...prev,
      options: prev.options.includes(id)
        ? prev.options.filter(o => o !== id)
        : [...prev.options, id]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialData && initialData.id) {
      updateEvent(initialData.id, formData);
    } else {
      addEvent(formData);
    }
    if (onComplete) onComplete();
  };

  return (
    <div className="card fade-in">
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-grid">
          <div className="form-group full-width">
            <label>Nome do Projeto</label>
            <input
              type="text"
              required
              placeholder="Ex: Reunião de Pais"
              value={formData.projectName}
              onChange={e => setFormData({ ...formData, projectName: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Data de Início</label>
            <input
              type="date"
              required
              value={formData.startDate}
              onChange={e => setFormData({ ...formData, startDate: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Hora do Evento</label>
            <input
              type="time"
              required
              value={formData.eventTime}
              onChange={e => setFormData({ ...formData, eventTime: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Local</label>
            <input
              type="text"
              required
              placeholder="Ex: Auditório"
              value={formData.location}
              onChange={e => setFormData({ ...formData, location: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Funcionário DECOM (Responsável Externo)</label>
            <select
              required
              value={formData.employeeId}
              onChange={e => setFormData({ ...formData, employeeId: e.target.value })}
            >
              <option value="">Selecione um funcionário...</option>
              {employees.map(emp => (
                <option key={emp.id} value={emp.id}>
                  {emp.name} ({emp.phone})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Responsável pelo Projeto (Escola)</label>
            <input
              type="text"
              required
              placeholder="Nome do responsável"
              value={formData.responsible}
              onChange={e => setFormData({ ...formData, responsible: e.target.value })}
            />
          </div>

          <div className="form-group full-width border-top">
            <label className="section-label-small">Destino do Webhook</label>
            <div className="webhook-selector-grid">
              <label className={`webhook-option ${formData.webhookMode === 'production' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="webhookMode"
                  value="production"
                  checked={formData.webhookMode === 'production'}
                  onChange={() => setFormData({ ...formData, webhookMode: 'production' })}
                />
                <div className="option-content">
                  <span className="option-title">Produção</span>
                  <span className="option-url">{webhookSettings.productionUrl || 'Não configurada'}</span>
                </div>
              </label>

              <label className={`webhook-option ${formData.webhookMode === 'test' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="webhookMode"
                  value="test"
                  checked={formData.webhookMode === 'test'}
                  onChange={() => setFormData({ ...formData, webhookMode: 'test' })}
                />
                <div className="option-content">
                  <span className="option-title">Teste</span>
                  <span className="option-url">{webhookSettings.testUrl || 'Não configurada'}</span>
                </div>
              </label>

              <label className={`webhook-option ${formData.webhookMode === 'custom' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="webhookMode"
                  value="custom"
                  checked={formData.webhookMode === 'custom'}
                  onChange={() => setFormData({ ...formData, webhookMode: 'custom' })}
                />
                <div className="option-content">
                  <span className="option-title">Customizada</span>
                  <span className="option-url">Usar uma URL específica</span>
                </div>
              </label>
            </div>

            {formData.webhookMode === 'custom' && (
              <div className="custom-url-input fade-in">
                <input
                  type="url"
                  required
                  placeholder="https://sua-url-aqui.com/webhook"
                  value={formData.webhookUrl}
                  onChange={e => setFormData({ ...formData, webhookUrl: e.target.value })}
                />
              </div>
            )}
          </div>

          <div className="form-group full-width">
            <label>Observação</label>
            <textarea
              rows="3"
              placeholder="Instruções adicionais..."
              value={formData.observation}
              onChange={e => setFormData({ ...formData, observation: e.target.value })}
            ></textarea>
          </div>
        </div>

        <div className="options-section">
          <label className="section-label">Opções de Disparo (Antecedência)</label>
          <div className="options-grid">
            {triggerOptions.map(opt => (
              <label key={opt.id} className="checkbox-container">
                <input
                  type="checkbox"
                  checked={formData.options.includes(opt.id)}
                  onChange={() => handleToggleOption(opt.id)}
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            <Send size={18} />
            {initialData ? 'Salvar Alterações' : 'Agendar Evento'}
          </button>
        </div>
      </form>

      <style jsx>{`
        .card {
          background-color: var(--bg-medium);
          border: 1px solid var(--bg-light);
          border-radius: 8px;
          padding: 32px;
          max-width: 800px;
          margin: 0 auto;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .full-width {
            grid-column: span 2;
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

        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(245, 168, 0, 0.2);
        }

        select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23F5A800' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          cursor: pointer;
        }

        input, textarea, select {
          background-color: var(--bg-deep);
          border: 1px solid var(--bg-light);
          color: white;
          padding: 12px 16px;
          border-radius: 6px;
          font-family: var(--font-body);
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .options-section {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--bg-light);
        }

        .section-label {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
          margin-bottom: 20px;
        }

        .section-label-small {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary-soft);
          margin-bottom: 12px;
        }

        .border-top {
            margin-top: 10px;
            padding-top: 20px;
            border-top: 1px solid var(--bg-light);
        }

        .webhook-selector-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 16px;
        }

        .webhook-option {
            background-color: var(--bg-deep);
            border: 1px solid var(--bg-light);
            border-radius: 6px;
            padding: 12px;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .webhook-option input {
            display: none;
        }

        .webhook-option:hover {
            border-color: var(--bg-lighter);
        }

        .webhook-option.active {
            border-color: var(--primary);
            background-color: rgba(245, 168, 0, 0.05);
        }

        .option-title {
            font-size: 12px;
            font-weight: 700;
            color: var(--primary);
            display: block;
        }

        .option-url {
            font-size: 10px;
            color: var(--text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
        }

        .custom-url-input {
            margin-top: 8px;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          font-size: 13px;
          color: white;
          transition: 0.2s;
        }

        .checkbox-container:hover {
            color: var(--primary-soft);
        }

        .checkmark {
          width: 18px;
          height: 18px;
          border: 1px solid var(--bg-light);
          border-radius: 4px;
          display: inline-block;
          position: relative;
          transition: all 0.2s;
        }

        input[type="checkbox"] {
          display: none;
        }

        input[type="checkbox"]:checked + .checkmark {
          background-color: var(--primary);
          border-color: var(--primary);
        }

        input[type="checkbox"]:checked + .checkmark:after {
          content: "";
          position: absolute;
          left: 6px;
          top: 2px;
          width: 4px;
          height: 8px;
          border: solid var(--bg-deep);
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .form-actions {
          margin-top: 32px;
          display: flex;
          justify-content: flex-end;
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
          gap: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          background-color: var(--primary-soft);
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default EventForm;
