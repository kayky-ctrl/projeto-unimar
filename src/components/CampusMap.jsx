import { useApp } from '../hooks/useApp';
import React, { useState, useMemo } from 'react';

function CampusMap() {
    const { setCurrentPage } = useApp();
    
    /* ====================================
       SEÇÃO 1: ESTADOS E VARIÁVEIS DE DADOS
       ==================================== */
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Dados sobre as localizações do campus, mantidos no componente
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
            image: "https://images.unsplash.com/photo-1554520336-3a17e082b2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            hours: "Segunda a sexta, 7h às 22h | Sábado, 8h às 12h",
            category: "Acadêmico"
        },
        {
            id: 3,
            name: "Biblioteca Central",
            position: { x: 50, y: 30 },
            description: "Amplo acervo de livros, periódicos e mídias digitais. Oferece salas de estudo individuais e em grupo, além de computadores com acesso à internet.",
            image: "https://images.unsplash.com/photo-1549491684-177b9499878a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            hours: "Segunda a sexta, 8h às 22h | Sábado, 8h às 17h",
            category: "Serviços"
        },
        {
            id: 4,
            name: "Restaurante Universitário",
            position: { x: 80, y: 70 },
            description: "Oferece refeições balanceadas a preços acessíveis para alunos, professores e funcionários. Menu diário com opções vegetarianas e veganas.",
            image: "https://images.unsplash.com/photo-1506368249639-73a7726485d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            hours: "Almoço: 11h às 14h | Jantar: 18h às 20h",
            category: "Alimentação"
        },
        {
            id: 5,
            name: "Centro de Convivência",
            position: { x: 10, y: 40 },
            description: "Espaço de lazer e socialização com mesas de jogos, áreas de descanso e lanchonetes. Ponto de encontro para atividades extracurriculares.",
            image: "https://images.unsplash.com/photo-1526495393043-3453b3b44766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            hours: "Segunda a sexta, 8h às 22h",
            category: "Social"
        },
        {
            id: 6,
            name: "Setor Administrativo",
            position: { x: 25, y: 25 },
            description: "Sede da reitoria, secretaria acadêmica, financeiro e outros departamentos administrativos. Local para matrículas, emissão de documentos e atendimento geral.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            hours: "Segunda a sexta, 8h às 18h",
            category: "Serviços"
        }
    ];

    // Lógica para filtrar a lista de locais com base no termo de busca
    // O useMemo evita recriar a lista filtrada em cada renderização
    const filteredLocations = useMemo(() => {
        return locations.filter(location =>
            location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            location.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, locations]);

    /* ====================================
       SEÇÃO 2: RENDERIZAÇÃO DO COMPONENTE
       ==================================== */
    return (
        <div className="main-container" id="campus-map">
            {/* Título e descrição da página */}
            <div className="page-header">
                <h1>Mapa do Campus</h1>
                <p>Navegue pelos principais pontos da Unimar, encontre blocos, laboratórios e serviços.</p>
            </div>

            <div className="campus-map-grid">
                {/* Lado esquerdo: Mapa e Busca */}
                <div className="map-and-info-section">
                    {/* Barra de Pesquisa */}
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Buscar por bloco ou serviço..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <button className="btn btn-primary btn-sm">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    {/* Mapa Estático do Campus */}
                    <div className="map-container card">
                        {/* Imagem do mapa */}
                        <img
                            src="https://via.placeholder.com/1000x600.png?text=Mapa+do+Campus"
                            alt="Mapa do campus da UNIMAR"
                            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                        />

                        {/* Marcadores de Localização */}
                        {filteredLocations.map(loc => (
                            <div
                                key={loc.id}
                                className={`map-marker ${selectedLocation && selectedLocation.id === loc.id ? 'active' : ''}`}
                                style={{
                                    left: `${loc.position.x}%`,
                                    top: `${loc.position.y}%`,
                                }}
                                onClick={() => setSelectedLocation(loc)}
                            >
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="marker-tooltip">{loc.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Informações de Acesso */}
                    <div className="getting-here-section card">
                        <h3>Como chegar</h3>
                        <p>A universidade conta com fácil acesso via transporte público e amplo estacionamento para veículos particulares.</p>
                        <ul>
                            <li><i className="fas fa-bus"></i> **Transporte Público:** Linhas 102 e 105 param em frente ao portão principal.</li>
                            <li><i className="fas fa-car"></i> **Estacionamento:** Vagas gratuitas para alunos e visitantes.</li>
                        </ul>
                    </div>
                </div>

                {/* Lado direito: Lista de Locais e Detalhes */}
                <div className="sidebar-section">
                    {/* Lista de Locais */}
                    <div className="location-list card">
                        <h3>Locais no Campus ({filteredLocations.length})</h3>
                        <div className="list-scroll-area">
                            {filteredLocations.length > 0 ? (
                                filteredLocations.map(loc => (
                                    <div
                                        key={loc.id}
                                        className={`location-item ${selectedLocation && selectedLocation.id === loc.id ? 'active' : ''}`}
                                        onClick={() => setSelectedLocation(loc)}
                                    >
                                        <h4>{loc.name}</h4>
                                        <p className="text-muted">{loc.category}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-muted">Nenhum local encontrado para a busca.</p>
                            )}
                        </div>
                    </div>

                    {/* Detalhes do Local Selecionado */}
                    <div className="location-info card">
                        {selectedLocation ? (
                            <>
                                <img
                                    src={selectedLocation.image}
                                    alt={`Imagem de ${selectedLocation.name}`}
                                    className="info-image"
                                />
                                <div className="info-content">
                                    <h3>{selectedLocation.name}</h3>
                                    <p className="text-muted">{selectedLocation.category}</p>
                                    <p>{selectedLocation.description}</p>
                                    <p><strong>Horário de Funcionamento:</strong> {selectedLocation.hours}</p>
                                </div>
                                <button
                                    className="btn btn-outline"
                                    onClick={() => {
                                        document.getElementById('campus-map')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    <i className="fas fa-map-marker-alt"></i> Mostrar no Mapa
                                </button>
                            </>
                        ) : (
                            <div className="empty-state">
                                <i className="fas fa-map-marker-alt"></i>
                                <h4>Selecione um local</h4>
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
