import { useApp } from '../hooks/useApp';
import UserDashboard from './UserDashboard';
import LoadingSpinner from './LoadingSpinner';

function Dashboard() {
    const { user, isLoading, events, news, formatDisplayDate, formatFullDate } = useApp();

    if (isLoading) {
        return (
            <div className="main-container">
                <LoadingSpinner />
            </div>
        );
    }

    // Se o usuário estiver logado, mostrar dashboard personalizado
    if (user) {
        return <UserDashboard />;
    }

    // Dashboard para usuários não logados
    return (
        <div className="main-container">
            <div className="welcome-banner">
                <div>
                    <h2>Bem-vindo à UNIMAR</h2>
                    <p>Seu portal integrado de serviços acadêmicos</p>
                </div>
                <div>
                    <button className="btn btn-primary">Explorar Recursos</button>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="card">
                    <div className="card-header">
                        <h3><i className="fas fa-calendar-alt"></i> Próximos Eventos</h3>
                        <div className="card-icon">
                            <i className="fas fa-calendar"></i>
                        </div>
                    </div>
                    <ul className="event-list">
                        {events.map(event => (
                            <li key={event.id} className="event-item">
                                <span className="event-date">{formatDisplayDate(event.date)} - {event.time}</span>
                                <strong>{event.title}</strong>
                                <span>{event.location}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>
                        <i className="fas fa-plus"></i> Ver Todos os Eventos
                    </button>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3><i className="fas fa-bullhorn"></i> Notícias e Avisos</h3>
                        <div className="card-icon">
                            <i className="fas fa-newspaper"></i>
                        </div>
                    </div>
                    <ul className="news-list">
                        {news.map(newsItem => (
                            <li key={newsItem.id} className="news-item">
                                <strong>{newsItem.title}</strong>
                                <p>{newsItem.content}</p>
                                <span className="event-date">Publicado em: {formatDisplayDate(newsItem.date)}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>
                        <i className="fas fa-list"></i> Ver Todas as Notícias
                    </button>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3><i className="fas fa-bolt"></i> Acesso Rápido</h3>
                        <div className="card-icon">
                            <i className="fas fa-link"></i>
                        </div>
                    </div>
                    <div className="quick-actions">
                        <div className="quick-btn">
                            <i className="fas fa-user-graduate"></i>
                            <span>Portal do Aluno</span>
                        </div>
                        <div className="quick-btn">
                            <i className="fas fa-book"></i>
                            <span>Biblioteca Virtual</span>
                        </div>
                        <div className="quick-btn">
                            <i className="fas fa-calendar-day"></i>
                            <span>Calendário Acadêmico</span>
                        </div>
                        <div className="quick-btn">
                            <i className="fas fa-briefcase"></i>
                            <span>Bolsa de Estágios</span>
                        </div>
                        <div className="quick-btn">
                            <i className="fas fa-certificate"></i>
                            <span>Atividades Complementares</span>
                        </div>
                        <div className="quick-btn">
                            <i className="fas fa-headset"></i>
                            <span>Suporte Técnico</span>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3><i className="fas fa-map-marked-alt"></i> Mapa do Campus</h3>
                        <div className="card-icon">
                            <i className="fas fa-map"></i>
                        </div>
                    </div>
                    <p>Explore as instalações da UNIMAR e descubra todos os recursos disponíveis no campus.</p>
                    <button
                        className="btn btn-primary"
                        style={{ marginTop: 'auto', width: '100%' }}
                        onClick={() => setCurrentPage('campus-map')}
                    >
                        <i className="fas fa-location-arrow"></i> Ver Mapa do Campus
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;