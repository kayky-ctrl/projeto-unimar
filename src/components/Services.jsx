import { useApp } from '../hooks/useApp';

function Services() {
    const { user } = useApp();

    return (
        <div className="main-container">
            <h2>Serviços Acadêmicos</h2>
            <p>Central de serviços disponíveis para alunos e professores</p>
            
            <div className="dashboard-grid">
                <div className="card">
                    <div className="card-header">
                        <h3><i className="fas fa-book"></i> Biblioteca</h3>
                        <div className="card-icon">
                            <i className="fas fa-book"></i>
                        </div>
                    </div>
                    <p>Acesso ao acervo digital, renovação de empréstimos e reservas.</p>
                    <button className="btn btn-primary" style={{ marginTop: 'auto' }}>
                        Acessar Biblioteca
                    </button>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3><i className="fas fa-file-invoice"></i> Financeiro</h3>
                        <div className="card-icon">
                            <i className="fas fa-file-invoice"></i>
                        </div>
                    </div>
                    <p>Consulta de boletos, histórico de pagamentos e solicitações.</p>
                    <button className="btn btn-primary" style={{ marginTop: 'auto' }}>
                        Acessar Financeiro
                    </button>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3><i className="fas fa-certificate"></i> Histórico Acadêmico</h3>
                        <div className="card-icon">
                            <i className="fas fa-certificate"></i>
                        </div>
                    </div>
                    <p>Visualize suas notas, histórico e documentos acadêmicos.</p>
                    <button className="btn btn-primary" style={{ marginTop: 'auto' }}>
                        Acessar Histórico
                    </button>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3><i className="fas fa-clipboard-list"></i> Matrículas</h3>
                        <div className="card-icon">
                            <i className="fas fa-clipboard-list"></i>
                        </div>
                    </div>
                    <p>Realize sua matrícula, altere disciplinas e consulte o horário.</p>
                    <button className="btn btn-primary" style={{ marginTop: 'auto' }}>
                        Acessar Matrículas
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Services;