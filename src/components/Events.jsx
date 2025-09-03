import { useApp } from '../hooks/useApp';
import React from 'react';

function Events() {
    const { events, formatDisplayDate, formatFullDate } = useApp();

    // Formatar datas para exibição
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return {
            day: date.getDate(),
            month: date.toLocaleString('pt-BR', { month: 'short' }),
            year: date.getFullYear()
        };
    };

    // Gerar dias do calendário
    const generateCalendarDays = () => {
        const days = [];
        const daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
        
        // Adicionar cabeçalho dos dias
        daysOfWeek.forEach((day, index) => {
            days.push(
                <div key={`header-${index}`} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {day}
                </div>
            );
        });

        // Adicionar dias do mês atual
        const today = new Date();
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        
        // Dias vazios no início
        for (let i = 0; i < firstDay.getDay(); i++) {
            days.push(<div key={`empty-${i}`} className="calendar-cell"></div>);
        }

        // Dias do mês
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const isToday = i === today.getDate();
            const hasEvent = events.some(event => {
                const eventDate = new Date(event.date);
                return eventDate.getDate() === i && 
                       eventDate.getMonth() === today.getMonth() && 
                       eventDate.getFullYear() === today.getFullYear();
            });

            days.push(
                <div
                    key={`day-${i}`}
                    className={`calendar-cell ${isToday ? 'today' : ''} ${hasEvent ? 'has-event' : ''}`}
                >
                    {i}
                    {hasEvent && <div className="event-dot"></div>}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="main-container">
            <h2>Eventos da UNIMAR</h2>
            <p>Confira os próximos eventos acadêmicos e culturais</p>

            <div className="events-container">
                <div className="events-list">
                    {events.map(event => {
                        const formattedDate = formatDate(event.date);

                        return (
                            <div key={event.id} className="event-card">
                                <div className="event-date-badge">
                                    <div className="event-day">{formattedDate.day}</div>
                                    <div className="event-month">{formattedDate.month}</div>
                                    <div className="event-year">{formattedDate.year}</div>
                                </div>
                                <div className="event-details">
                                    <h3 className="event-title">{event.title}</h3>
                                    <p className="event-time">⏰ {event.time} | 📍 {event.location}</p>
                                    <p>Participe deste evento incrível organizado pela UNIMAR. Confira mais detalhes e faça sua inscrição.</p>
                                    <button className="btn btn-primary" style={{ marginTop: '1rem' }}>
                                        Mais Informações
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="calendar-sidebar">
                    <div className="calendar-header">
                        <h3>{new Date().toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}</h3>
                        <div>
                            <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', marginRight: '0.5rem' }}>←</button>
                            <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem' }}>→</button>
                        </div>
                    </div>

                    <div className="calendar-grid">
                        {generateCalendarDays()}
                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                        <h4>Próximos Eventos</h4>
                        <ul className="event-list">
                            {events.slice(0, 2).map(event => (
                                <li key={event.id} className="event-item">
                                    <span className="event-date">{formatDisplayDate(event.date)}</span>
                                    <strong>{event.title}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <style>
                {`
                .today {
                    background-color: var(--primary) !important;
                    color: white !important;
                    font-weight: bold;
                }
                
                .has-event {
                    position: relative;
                }
                
                .event-dot {
                    position: absolute;
                    bottom: 2px;
                    right: 2px;
                    width: 6px;
                    height: 6px;
                    background-color: var(--accent);
                    border-radius: 50%;
                }
                
                .event-year {
                    font-size: 0.7rem;
                    margin-top: 2px;
                }
                `}
            </style>
        </div>
    );
}

export default Events;