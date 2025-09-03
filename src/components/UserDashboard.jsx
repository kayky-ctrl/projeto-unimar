import { useApp } from '../hooks/useApp';

function UserDashboard() {
    const { user, setCurrentPage, formatDisplayDate, formatFullDate } = useApp();

    // Dados simulados do usuário com datas atuais
    const userSchedule = [
        { time: '08:00 - 10:00', subject: 'Engenharia de Software II', professor: 'Prof. Silva', room: 'Sala 101' },
        { time: '10:00 - 12:00', subject: 'Banco de Dados', professor: 'Prof. Oliveira', room: 'Lab. Informática' },
        { time: '14:00 - 16:00', subject: 'Programação Web', professor: 'Prof. Santos', room: 'Sala 203' },
        { time: '16:00 - 18:00', subject: 'Inteligência Artificial', professor: 'Prof. Costa', room: 'Sala 105' }
    ];

    const recentGrades = [
        { subject: 'Engenharia de Software II', grade: '8.5', date: formatDisplayDate(new Date().setDate(new Date().getDate() - 7)) },
        { subject: 'Banco de Dados', grade: '9.0', date: formatDisplayDate(new Date().setDate(new Date().getDate() - 14)) },
        { subject: 'Programação Web', grade: '7.8', date: formatDisplayDate(new Date().setDate(new Date().getDate() - 21)) }
    ];

    return (
        <div className="main-container">
            {/* Banner de boas-vindas personalizado */}
            <div className="welcome-banner">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <img 
                        src={user.avatar} 
                        alt={user.name}
                        style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '4px solid rgba(255,255,255,0.3)' }}
                    />
                    <div>
                        <h2>Bem-vindo de volta, {user.name}!</h2>
                        <p>Hoje é {formatFullDate(new Date())} - Confira suas atualizações</p>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => setCurrentPage('services')}>
                        <i className="fas fa-rocket"></i> Meus Serviços
                    </button>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Horário de Aulas */}
                <div className="card">
                    <div className="card-header">
                        <h3><i className="fas fa-calendar-day"></i> Sua Agenda Hoje</h3>
                        <div className="card-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                    </div>
                    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{formatFullDate(new Date())}</span>
                        <span style={{ padding: '0.3rem 0.6rem', backgroundColor: 'var(--secondary)', borderRadius: '4px', fontSize: '0.8rem' }}>
                            {userSchedule.length} aulas
                        </span>
                    </div>
                    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                        {userSchedule.map((item, index) => (
                            <div key={index} style={{ 
                                padding: '0.8rem', 
                                borderBottom: '1px solid #eee',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.3rem'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <strong style={{ color: 'var(--primary)' }}>{item.time}</strong>
                                    <span style={{ fontSize: '0.8rem', backgroundColor: 'var(--secondary)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                                        {item.room}
                                    </span>
                                </div>
                                <div>
                                    <strong>{item.subject}</strong>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-light)' }}>{item.professor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-outline" style={{ marginTop: '1rem', width: '100%' }}>
                        <i className="fas fa-calendar-alt"></i> Ver Calendário Completo
                    </button>
                </div>

                {/* Notas Recentes */}
                <div className="card">
                    <div className="card-header">
                        <h3><i className="fas fa-chart-line"></i> Desempenho Acadêmico</h3>
                        <div className="card-icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Média Geral</div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--primary)' }}>8.4</div>
                        </div>
                        <div style={{ width: '60px', height: '60px', position: 'relative' }}>
                            <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
                                <path
                                    d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#eee"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#ff6b00"
                                    strokeWidth="3"
                                    strokeDasharray="84, 100"
                                />
                                <text x="18" y="22" textAnchor="middle" fill="var(--text)" fontSize="10">84%</text>
                            </svg>
                        </div>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <h4 style={{ marginBottom: '0.8rem' }}>Notas Recentes</h4>
                        {recentGrades.map((grade, index) => (
                            <div key={index} style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                padding: '0.6rem 0',
                                borderBottom: '1px solid #eee'
                            }}>
                                <div>
                                    <div style={{ fontWeight: '500' }}>{grade.subject}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{grade.date}</div>
                                </div>
                                <div style={{ 
                                    fontWeight: 'bold', 
                                    color: parseFloat(grade.grade) >= 7 ? 'var(--success)' : 'var(--danger)',
                                    fontSize: '1.1rem'
                                }}>
                                    {grade.grade}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-outline" style={{ marginTop: '1rem', width: '100%' }}>
                        <i className="fas fa-book"></i> Ver Todas as Disciplinas
                    </button>
                </div>

                {/* Atividades Pendentes */}
                <div className="card">
                    <div className="card-header">
                        <h3><i className="fas fa-tasks"></i> Pendências</h3>
                        <div className="card-icon">
                            <i className="fas fa-exclamation-circle"></i>
                        </div>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '0.9rem' }}>Documentos Pendentes</span>
                            <span style={{ 
                                padding: '0.2rem 0.6rem', 
                                backgroundColor: 'var(--danger)', 
                                color: 'white', 
                                borderRadius: '12px', 
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>
                                {user.progress.pendingDocuments}
                            </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '0.9rem' }}>Horas Complementares</span>
                            <span style={{ 
                                padding: '0.2rem 0.6rem', 
                                backgroundColor: 'var(--warning)', 
                                color: 'white', 
                                borderRadius: '12px', 
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>
                                {user.progress.completedHours}/{user.progress.totalHours}
                            </span>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'var(--secondary)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>Próximos Prazos</h4>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '0.9rem' }}>Trabalho de Eng. Software</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--danger)', fontWeight: 'bold' }}>
                                {formatDisplayDate(new Date().setDate(new Date().getDate() + 2))}
                            </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '0.9rem' }}>Prova de Banco de Dados</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--warning)', fontWeight: 'bold' }}>
                                {formatDisplayDate(new Date().setDate(new Date().getDate() + 5))}
                            </span>
                        </div>
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%' }}>
                        <i className="fas fa-check-circle"></i> Resolver Pendências
                    </button>
                </div>

                {/* Acesso Rápido */}
                <div className="card">
                    <div className="card-header">
                        <h3><i className="fas fa-bolt"></i> Acesso Rápido</h3>
                        <div className="card-icon">
                            <i className="fas fa-rocket"></i>
                        </div>
                    </div>
                    <div className="quick-actions">
                        <div className="quick-btn" onClick={() => setCurrentPage('services')}>
                            <i className="fas fa-book"></i>
                            <span>Portal Acadêmico</span>
                        </div>
                        <div className="quick-btn" onClick={() => window.open('#', '_blank')}>
                            <i className="fas fa-file-pdf"></i>
                            <span>Documentos</span>
                        </div>
                        <div className="quick-btn" onClick={() => setCurrentPage('courses')}>
                            <i className="fas fa-graduation-cap"></i>
                            <span>Meu Curso</span>
                        </div>
                        <div className="quick-btn" onClick={() => setCurrentPage('events')}>
                            <i className="fas fa-calendar"></i>
                            <span>Eventos</span>
                        </div>
                        <div className="quick-btn" onClick={() => window.open('#', '_blank')}>
                            <i className="fas fa-money-bill-wave"></i>
                            <span>Financeiro</span>
                        </div>
                        <div className="quick-btn" onClick={() => setCurrentPage('campus-map')}>
                            <i className="fas fa-map-marked-alt"></i>
                            <span>Mapa do Campus</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;