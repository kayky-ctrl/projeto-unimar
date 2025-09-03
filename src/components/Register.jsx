import { useApp } from '../hooks/useApp';
import LoadingSpinner from './LoadingSpinner';
import React from 'react';

function Register() {
    const { register, isLoading, setCurrentPage } = useApp();
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        studentId: '',
        course: ''
    });
    const [errors, setErrors] = React.useState({});
    const [success, setSuccess] = React.useState('');

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name) newErrors.name = 'Nome é obrigatório';
        if (!formData.email) newErrors.email = 'Email é obrigatório';
        if (!formData.email.includes('@')) newErrors.email = 'Email inválido';
        if (!formData.password) newErrors.password = 'Senha é obrigatória';
        if (formData.password.length < 6) newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Senhas não coincidem';
        if (!formData.studentId) newErrors.studentId = 'RA é obrigatório';
        if (!formData.course) newErrors.course = 'Curso é obrigatório';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        try {
            const result = await register(formData);
            setSuccess(result.message);
            setTimeout(() => {
                setCurrentPage('login');
            }, 2000);
        } catch (error) {
            setErrors({ submit: error.message });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        
        // Limpar erro do campo quando usuário começar a digitar
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ''
            });
        }
    };

    return (
        <div className="main-container">
            <div className="login-container">
                <div className="login-header">
                    <h2>Criar Conta</h2>
                    <p>Registre-se no portal UNIMAR Connect</p>
                </div>

                {success && (
                    <div style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(40, 167, 69, 0.1)',
                        border: '1px solid var(--success)',
                        borderRadius: '6px',
                        color: 'var(--success)',
                        marginBottom: '1.5rem'
                    }}>
                        <i className="fas fa-check-circle"></i> {success}
                    </div>
                )}

                {errors.submit && (
                    <div style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(220, 53, 69, 0.1)',
                        border: '1px solid var(--danger)',
                        borderRadius: '6px',
                        color: 'var(--danger)',
                        marginBottom: '1.5rem'
                    }}>
                        <i className="fas fa-exclamation-circle"></i> {errors.submit}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome completo:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email institucional:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className={errors.email ? 'error' : ''}
                            placeholder="seu.email@unimar.br"
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="studentId">RA (Registro Acadêmico):</label>
                        <input
                            type="text"
                            id="studentId"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className={errors.studentId ? 'error' : ''}
                        />
                        {errors.studentId && <span className="error-text">{errors.studentId}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="course">Curso:</label>
                        <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className={errors.course ? 'error' : ''}
                        >
                            <option value="">Selecione seu curso</option>
                            <option value="engenharia">Engenharia de Software</option>
                            <option value="administracao">Administração</option>
                            <option value="direito">Direito</option>
                            <option value="medicina">Medicina</option>
                            <option value="psicologia">Psicologia</option>
                            <option value="enfermagem">Enfermagem</option>
                        </select>
                        {errors.course && <span className="error-text">{errors.course}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className={errors.password ? 'error' : ''}
                        />
                        {errors.password && <span className="error-text">{errors.password}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar Senha:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className={errors.confirmPassword ? 'error' : ''}
                        />
                        {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{ width: '100%' }}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <LoadingSpinner size="small" />
                        ) : (
                            <>
                                <i className="fas fa-user-plus"></i> Criar Conta
                            </>
                        )}
                    </button>
                </form>

                <div className="login-footer">
                    <p>Já tem uma conta? <a href="#" onClick={() => setCurrentPage('login')}>Fazer login</a></p>
                </div>
            </div>
        </div>
    );
}

export default Register;