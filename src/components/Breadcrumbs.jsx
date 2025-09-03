import { useApp } from '../hooks/useApp';

function Breadcrumbs() {
    const { currentPage } = useApp();
    
    const pageTitles = {
        'home': 'Início',
        'courses': 'Cursos',
        'events': 'Eventos',
        'services': 'Serviços',
        'contact': 'Contato',
        'login': 'Login',
        'register': 'Registro',
        'campus-map': 'Mapa do Campus'
    };

    return (
        <nav style={{ marginBottom: '1.5rem' }}>
            <ol style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem',
                color: 'var(--text-light)'
            }}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                    <a 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/';
                        }}
                        style={{ color: 'var(--primary)', textDecoration: 'none' }}
                    >
                        <i className="fas fa-home"></i>
                    </a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="fas fa-chevron-right" style={{ fontSize: '0.7rem' }}></i>
                    <span style={{ marginLeft: '0.5rem', color: 'var(--text)' }}>
                        {pageTitles[currentPage] || 'Página'}
                    </span>
                </li>
            </ol>
        </nav>
    );
}

export default Breadcrumbs;