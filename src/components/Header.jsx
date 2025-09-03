import { useApp } from '../hooks/useApp';
import NotificationCenter from './NotificationCenter';
import ThemeToggle from './ThemeToggle';
import React from 'react';

function Header() {
  const { user, isAuthenticated, logout, currentPage, setCurrentPage, isLoading } = useApp();
  
  return (
    <header className="header">
      <div className="logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iI2ZmNmIwMCIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VTx0c3BhbiBmb250LXNpemU9IjE0IiBkeT0iLTMiPkC8L3RzcGFuPjwvdGV4dD48L3N2Zz4=" alt="UNIMAR Connect Logo" />
        <h1>UNIMAR Connect</h1>
      </div>
      
      <nav className="nav">
        <ul>
          <li><a href="#" className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>Início</a></li>
          <li><a href="#" className={currentPage === 'courses' ? 'active' : ''} onClick={() => setCurrentPage('courses')}>Cursos</a></li>
          <li><a href="#" className={currentPage === 'events' ? 'active' : ''} onClick={() => setCurrentPage('events')}>Eventos</a></li>
          <li><a href="#" className={currentPage === 'services' ? 'active' : ''} onClick={() => setCurrentPage('services')}>Serviços</a></li>
          <li><a href="#" className={currentPage === 'campus-map' ? 'active' : ''} onClick={() => setCurrentPage('campus-map')}>Mapa do Campus</a></li>
          <li><a href="#" className={currentPage === 'contact' ? 'active' : ''} onClick={() => setCurrentPage('contact')}>Contato</a></li>
        </ul>
      </nav>
      
      <div className="user-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ThemeToggle />
        
        {isLoading ? (
          <div style={{ 
            width: '20px', 
            height: '20px', 
            border: '2px solid #f3f3f3', 
            borderTop: '2px solid var(--accent)', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite' 
          }}></div>
        ) : isAuthenticated && user ? (
          <>
            <NotificationCenter />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img 
                src={user.avatar} 
                alt={user.name} 
                style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '50%', 
                  objectFit: 'cover',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Olá, {user.name.split(' ')[0]}</span>
                <span style={{ fontSize: '0.75rem', opacity: '0.8' }}>{user.role === 'student' ? 'Aluno' : 'Professor'}</span>
              </div>
            </div>
            <button 
              className="btn btn-outline" 
              onClick={logout}
              style={{ padding: '0.5rem 1rem' }}
            >
              <i className="fas fa-sign-out-alt"></i> Sair
            </button>
          </>
        ) : (
          <>
            <button 
              className="btn btn-outline" 
              onClick={() => setCurrentPage('login')}
              style={{ padding: '0.5rem 1rem' }}
            >
              <i className="fas fa-sign-in-alt"></i> Entrar
            </button>
            <button 
              className="btn btn-primary" 
              onClick={() => setCurrentPage('register')}
              style={{ padding: '0.5rem 1rem' }}
            >
              <i className="fas fa-user-plus"></i> Registrar
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;