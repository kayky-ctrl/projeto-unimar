import { useApp } from '../hooks/useApp';
import React from 'react';

function NotificationCenter() {
    const { notifications, markNotificationAsRead } = useApp();
    const [isOpen, setIsOpen] = React.useState(false);

    if (notifications.length === 0) return null;

    return (
        <div style={{ position: 'relative' }}>
            <button 
                className="btn btn-outline"
                onClick={() => setIsOpen(!isOpen)}
                style={{ position: 'relative' }}
            >
                <i className="fas fa-bell"></i>
                {notifications.length > 0 && (
                    <span style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        backgroundColor: 'var(--accent)',
                        color: 'white',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {notifications.length}
                    </span>
                )}
            </button>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: '0',
                    backgroundColor: 'white',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    width: '300px',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    zIndex: 1000,
                    marginTop: '0.5rem'
                }}>
                    <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>
                        <h4 style={{ margin: 0 }}>Notificações</h4>
                    </div>
                    
                    <div>
                        {notifications.map(notification => (
                            <div key={notification.id} style={{
                                padding: '1rem',
                                borderBottom: '1px solid var(--border)',
                                cursor: 'pointer',
                                transition: 'var(--transition)'
                            }}
                            onClick={() => markNotificationAsRead(notification.id)}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: `var(--${notification.type})`,
                                        marginTop: '0.5rem',
                                        flexShrink: 0
                                    }}></div>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem' }}>
                                            {notification.message}
                                        </p>
                                        <small style={{ color: 'var(--text-light)' }}>
                                            {new Date(notification.date).toLocaleDateString('pt-BR')}
                                        </small>
                                    </div>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            markNotificationAsRead(notification.id);
                                        }}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: 'var(--text-light)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default NotificationCenter;