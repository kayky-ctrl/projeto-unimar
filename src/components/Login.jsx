import { useApp } from '../hooks/useApp';
import LoadingSpinner from './LoadingSpinner';
import React from 'react';

function Login() {
    const { login, isLoading, isAuthenticated } = useApp();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);
    const [error, setError] = React.useState('');

    // Redirecionar se o usuário já estiver autenticado
    React.useEffect(() => {
        if (isAuthenticated) {
            // Usar timeout para evitar erros de renderização
            setTimeout(() => {
                window.location.href = '/';
            }, 100);
        }
    }, [isAuthenticated]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            await login(email, password);
            // O redirecionamento será tratado pelo useEffect acima
        } catch (err) {
            setError(err.message || 'Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    // Se o usuário já estiver autenticado, mostrar mensagem de redirecionamento
    if (isAuthenticated) {
        return (
            <div className="main-container">
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                    <div style={{ fontSize: '4rem', color: 'var(--success)', marginBottom: '1rem' }}>
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <h2>Login realizado com sucesso!</h2>
                    <p>Redirecionando para a página inicial...</p>
                    <LoadingSpinner />
                </div>
            </div>
        );
    }

    return (
        <div className="main-container">
            <div className="login-container">
                <div className="login-header">
                    <h2>Acesse sua conta</h2>
                    <p>Entre com suas credenciais da UNIMAR</p>
                </div>

                {error && (
                    <div style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(220, 53, 69, 0.1)',
                        border: '1px solid var(--danger)',
                        borderRadius: '6px',
                        color: 'var(--danger)',
                        marginBottom: '1.5rem'
                    }}>
                        <i className="fas fa-exclamation-circle"></i> {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email institucional:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isLoading}
                            placeholder="seu.email@unimar.br"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={isLoading}
                            placeholder="Sua senha"
                        />
                    </div>

                    <div className="login-options">
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="remember"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                disabled={isLoading}
                            />
                            <label htmlFor="remember">Lembrar-me</label>
                        </div>
                        <a href="#" className="forgot-password">Esqueci minha senha</a>
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
                                <i className="fas fa-sign-in-alt"></i> Entrar
                            </>
                        )}
                    </button>
                </form>

                <div className="login-footer">
                    <p>Não tem uma conta? <a href="#" onClick={() => window.alert('Entre em contato com a secretaria para criar sua conta.')}>Solicitar acesso</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;