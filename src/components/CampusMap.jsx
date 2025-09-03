import { useApp } from '../hooks/useApp';
import React, { useState } from 'react';

function CampusMap() {
    const { setCurrentPage } = useApp();
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Dados sobre as localizações do campus
    const locations = [
        {
            id: 1,
            name: "Bloco Acadêmico I",
            position: { x: 35, y: 60 },
            description: "Salas de aula dos cursos de Engenharia, Tecnologia e Ciências Exatas. Abriga laboratórios de informática, física e química.",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            hours: "Segunda a sexta, 7h às 22h | Sábado, 8h às 12h",
            category: "Acadêmico"
        },
        {
            id: 2,
            name: "Bloco Acadêmico II",
            position: { x: 60, y: 45 },
            description: "Salas de aula dos cursos de Saúde e Ciências Biológicas. Contém laboratórios de anatomia, microscopia e pesquisa.",
            image: "https://images.unsplash.com/photo-1582573618381-c9a77c31f6b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            hours: "Segunda a sexta, 7h às 22h | Sábado, 8h às 12h",
            category: "Acadêmico"
        },
        {
            id: 3,
            name: "Biblioteca Central",
            position: { x: 45, y: 30 },
            description: "Acervo com mais de 50.000 volumes, salas de estudo individual e em grupo, acesso a bases de dados acadêmicas.",
            image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            hours: "Segunda a sexta, 8h às 22h | Sábado, 8h às 16h",
            category: "Cultural"
        },
        {
            id: 4,
            name: "Auditório Central",
            position: { x: 25, y: 20 },
            description: "Espaço para eventos acadêmicos, palestras, seminários e defesas de TCC. Capacidade para 300 pessoas.",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            hours: "Segunda a sexta, 8h às 22h | Mediante agendamento",
            category: "Eventos"
        },
        {
            id: 5,
            name: "Complexo Esportivo",
            position: { x: 75, y: 70 },
            description: "Quadras poliesportivas, campo de futebol, piscina semiolímpica e academia. Espaço para práticas esportivas e eventos.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            hours: "Segunda a sexta, 6h às 22h | Sábado, 8h às 18h",
            category: "Esportes"
        },
        {
            id: 6,
            name: "Restaurante Universitário",
            position: { x: 50, y: 50 },
            description: "Refeitório com opções de alimentação balanceada a preços acessíveis para alunos, professores e funcionários.",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            hours: "Segunda a sexta, 11h às 14h | 17h30 às 19h30",
            category: "Alimentação"
        },
        {
            id: 7,
            name: "Administração Central",
            position: { x: 15, y: 40 },
            description: "Setores administrativos, diretoria, coordenações de curso e secretarias acadêmicas.",
            image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            hours: "Segunda a sexta, 8h às 18h",
            category: "Administrativo"
        }
    ];

    // Filtrar locais baseado na busca
    const filteredLocations = locations.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Renderizar mapa estático
    const renderStaticMap = () => (
        <div style={{ 
            height: '500px', 
            borderRadius: '16px', 
            overflow: 'hidden', 
            position: 'relative',
            background: 'linear-gradient(135deg, #1a1f29 0%, #2a3441 100%)',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}>
            {/* Imagem de fundo do mapa */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: '0.4',
                filter: 'grayscale(50%) contrast(120%)'
            }}></div>

            {/* Grade de referência sutil */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
            }}></div>

            {/* Marcadores no mapa estático */}
            {locations.map(location => (
                <div
                    key={location.id}
                    style={{
                        position: 'absolute',
                        left: `${location.position.x}%`,
                        top: `${location.position.y}%`,
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: selectedLocation?.id === location.id ? 'var(--accent)' : 'var(--primary)',
                        border: '3px solid rgba(255, 255, 255, 0.9)',
                        cursor: 'pointer',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: 'white',
                        zIndex: selectedLocation?.id === location.id ? 20 : 10
                    }}
                    onClick={() => setSelectedLocation(location)}
                    onMouseEnter={() => {
                        const marker = document.getElementById(`marker-${location.id}`);
                        if (marker) {
                            marker.style.display = 'block';
                            marker.style.opacity = '1';
                            marker.style.transform = 'translateX(-50%) translateY(0px)';
                        }
                    }}
                    onMouseLeave={() => {
                        const marker = document.getElementById(`marker-${location.id}`);
                        if (marker && selectedLocation?.id !== location.id) {
                            marker.style.opacity = '0';
                            marker.style.transform = 'translateX(-50%) translateY(10px)';
                            setTimeout(() => {
                                if (marker && selectedLocation?.id !== location.id) {
                                    marker.style.display = 'none';
                                }
                            }, 300);
                        }
                    }}
                >
                    {location.id}
                    <div
                        id={`marker-${location.id}`}
                        style={{
                            display: selectedLocation?.id === location.id ? 'block' : 'none',
                            opacity: selectedLocation?.id === location.id ? 1 : 0,
                            position: 'absolute',
                            bottom: '100%',
                            left: '50%',
                            transform: selectedLocation?.id === location.id ? 
                                'translateX(-50%) translateY(0px)' : 
                                'translateX(-50%) translateY(10px)',
                            backgroundColor: 'var(--primary)',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            fontSize: '12px',
                            fontWeight: '600',
                            whiteSpace: 'nowrap',
                            marginBottom: '12px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                            transition: 'all 0.3s ease',
                            pointerEvents: 'none',
                            zIndex: 30
                        }}
                    >
                        {location.name}
                        <div style={{
                            position: 'absolute',
                            bottom: '-6px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '12px',
                            height: '12px',
                            backgroundColor: 'var(--primary)',
                            clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
                        }}></div>
                    </div>
                </div>
            ))}
            
            {/* Legenda do mapa */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                backgroundColor: 'rgba(26, 31, 41, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border)',
                padding: '16px 20px',
                borderRadius: '12px',
                fontSize: '14px',
                color: 'var(--text)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
                <strong style={{ color: 'var(--text)', marginBottom: '8px', display: 'block' }}>Legenda do Campus</strong>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--primary)', borderRadius: '50%' }}></div>
                        <span>Prédios Acadêmicos</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--accent)', borderRadius: '50%' }}></div>
                        <span>Selecionado</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--success)', borderRadius: '50%' }}></div>
                        <span>Áreas Verdes</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--warning)', borderRadius: '50%' }}></div>
                        <span>Alimentação</span>
                    </div>
                </div>
            </div>

            {/* Bússola decorativa */}
            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(26, 31, 41, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text)',
                fontSize: '18px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}>
                <i className="fas fa-compass"></i>
            </div>
        </div>
    );

    return (
        <div className="main-container">
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ 
                    color: 'var(--text)', 
                    marginBottom: '0.5rem',
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                }}>
                    Mapa do Campus UNIMAR
                </h2>
                <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
                    Explore as instalações e serviços disponíveis em nosso campus
                </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
                <div style={{ gridColumn: '1 / -1' }}>
                    {/* Barra de pesquisa */}
                    <div style={{
                        backgroundColor: 'var(--light)',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        marginBottom: '1.5rem',
                        border: '1px solid var(--border)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ position: 'relative', flex: 1 }}>
                                <i className="fas fa-search" style={{
                                    position: 'absolute',
                                    left: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: 'var(--text-light)',
                                    zIndex: 1
                                }}></i>
                                <input
                                    type="text"
                                    placeholder="Pesquisar local no campus..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '0.9rem 1rem 0.9rem 3rem',
                                        borderRadius: '10px',
                                        border: '1px solid var(--border)',
                                        backgroundColor: 'var(--secondary)',
                                        color: 'var(--text)',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
                                <i className="fas fa-filter"></i> Filtrar
                            </button>
                        </div>
                    </div>

                    {/* Mapa */}
                    {renderStaticMap()}
                    
                    {/* Informações de localização */}
                    <div style={{ 
                        marginTop: '1.5rem', 
                        backgroundColor: 'var(--light)', 
                        padding: '1.5rem', 
                        borderRadius: '16px', 
                        border: '1px solid var(--border)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h3 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Como chegar à UNIMAR</h3>
                        <p style={{ color: 'var(--text)', marginBottom: '1rem' }}>
                            <strong>Endereço:</strong> Av. Higyno Muzzy Filho, 1001 - Marília/SP
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <i className="fas fa-bus" style={{ color: 'var(--primary)' }}></i> Ônibus
                                </h4>
                                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-light)' }}>
                                    <li>Linha 101 - Centro via Campus</li>
                                    <li>Linha 205 - Jardim Marajá via UNIMAR</li>
                                    <li>Linha 310 - Vila das Roseiras via Universidade</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <i className="fas fa-parking" style={{ color: 'var(--primary)' }}></i> Estacionamento
                                </h4>
                                <p style={{ color: 'var(--text-light)' }}>
                                    A UNIMAR oferece estacionamento gratuito para alunos, professores e visitantes, 
                                    com vagas especiais para idosos e pessoas com deficiência.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {/* Lista de locais */}
                    <div style={{ 
                        backgroundColor: 'var(--light)', 
                        padding: '1.5rem', 
                        borderRadius: '16px', 
                        border: '1px solid var(--border)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        height: 'fit-content'
                    }}>
                        <h3 style={{ color: 'var(--text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary)' }}></i> 
                            Locais do Campus
                        </h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
                            Clique em um local no mapa ou na lista abaixo para ver mais informações:
                        </p>
                        
                        <div style={{ marginTop: '1rem', maxHeight: '400px', overflowY: 'auto' }}>
                            {filteredLocations.map(location => (
                                <div 
                                    key={location.id} 
                                    style={{ 
                                        padding: '1rem', 
                                        borderBottom: '1px solid var(--border)', 
                                        cursor: 'pointer',
                                        backgroundColor: selectedLocation?.id === location.id ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
                                        transition: 'all 0.3s ease',
                                        borderRadius: '8px',
                                        marginBottom: '0.5rem'
                                    }}
                                    onClick={() => setSelectedLocation(location)}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = selectedLocation?.id === location.id ? 
                                            'rgba(var(--primary-rgb), 0.15)' : 'rgba(255, 255, 255, 0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = selectedLocation?.id === location.id ? 
                                            'rgba(var(--primary-rgb), 0.1)' : 'transparent';
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <strong style={{ color: 'var(--text)' }}>{location.name}</strong>
                                        <span style={{ 
                                            fontSize: '0.8rem', 
                                            padding: '0.2rem 0.6rem', 
                                            borderRadius: '12px', 
                                            backgroundColor: 'var(--secondary)',
                                            color: 'var(--text-light)'
                                        }}>
                                            {location.category}
                                        </span>
                                    </div>
                                    <p style={{ 
                                        color: 'var(--text-light)', 
                                        fontSize: '0.9rem', 
                                        margin: '0.5rem 0 0 0',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {location.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Detalhes do local selecionado */}
                    <div style={{ 
                        backgroundColor: 'var(--light)', 
                        padding: '1.5rem', 
                        borderRadius: '16px', 
                        border: '1px solid var(--border)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        height: 'fit-content',
                        position: 'sticky',
                        top: '1rem'
                    }}>
                        {selectedLocation ? (
                            <>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <h3 style={{ color: 'var(--text)', margin: 0 }}>{selectedLocation.name}</h3>
                                    <span style={{ 
                                        fontSize: '0.8rem', 
                                        padding: '0.3rem 0.8rem', 
                                        borderRadius: '12px', 
                                        backgroundColor: 'var(--secondary)',
                                        color: 'var(--text-light)',
                                        fontWeight: '500'
                                    }}>
                                        {selectedLocation.category}
                                    </span>
                                </div>
                                
                                <img 
                                    src={selectedLocation.image} 
                                    alt={selectedLocation.name} 
                                    style={{ 
                                        width: '100%', 
                                        height: '200px', 
                                        objectFit: 'cover', 
                                        borderRadius: '12px', 
                                        margin: '1rem 0',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                                    }}
                                />
                                
                                <p style={{ color: 'var(--text)', lineHeight: '1.6' }}>
                                    {selectedLocation.description}
                                </p>
                                
                                <div style={{ 
                                    marginTop: '1.5rem', 
                                    padding: '1rem', 
                                    backgroundColor: 'var(--secondary)', 
                                    borderRadius: '12px',
                                    borderLeft: '4px solid var(--primary)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                        <i className="fas fa-clock" style={{ color: 'var(--primary)' }}></i>
                                        <strong style={{ color: 'var(--text)' }}>Horário de Funcionamento:</strong>
                                    </div>
                                    <p style={{ color: 'var(--text)', margin: 0 }}>
                                        {selectedLocation.hours}
                                    </p>
                                </div>

                                <button 
                                    className="btn btn-primary" 
                                    style={{ marginTop: '1.5rem', width: '100%' }}
                                    onClick={() => {
                                        // Scroll to map
                                        document.getElementById('campus-map')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    <i className="fas fa-map-marker-alt"></i> Mostrar no Mapa
                                </button>
                            </>
                        ) : (
                            <div style={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                textAlign: 'center',
                                padding: '2rem',
                                color: 'var(--text-light)'
                            }}>
                                <i className="fas fa-map-marker-alt" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}></i>
                                <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem' }}>Selecione um local</h4>
                                <p>Clique em um local no mapa ou na lista ao lado para ver detalhes</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CampusMap;