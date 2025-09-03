import { useApp } from '../hooks/useApp';
import React from 'react';

function Contact() {
    const { user } = useApp();
    const [formData, setFormData] = React.useState({
        name: user ? user.name : '',
        email: user ? user.email : '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({
            name: user ? user.name : '',
            email: user ? user.email : '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="main-container">
            <h2>Entre em Contato</h2>
            <p>Estamos à disposição para esclarecer suas dúvidas</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                <div>
                    <h3>Informações de Contato</h3>
                    <div style={{ marginTop: '1.5rem' }}>
                        <p><strong><i className="fas fa-map-marker-alt"></i> Endereço:</strong></p>
                        <p>Av. Higyno Muzzy Filho, 1001 - Marília/SP</p>
                        
                        <p style={{ marginTop: '1rem' }}><strong><i className="fas fa-phone"></i> Telefone:</strong></p>
                        <p>(14) 2105-4000</p>
                        
                        <p style={{ marginTop: '1rem' }}><strong><i className="fas fa-envelope"></i> E-mail:</strong></p>
                        <p>connect@unimar.br</p>
                        
                        <p style={{ marginTop: '1rem' }}><strong><i className="fas fa-clock"></i> Horário de Atendimento:</strong></p>
                        <p>Segunda a sexta, das 8h às 22h</p>
                    </div>
                </div>
                
                <div>
                    <h3>Envie uma Mensagem</h3>
                    <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
                        <div className="form-group">
                            <label htmlFor="name">Nome:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="subject">Assunto:</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Mensagem:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '0.9rem', border: '1px solid var(--border)', borderRadius: '6px', minHeight: '120px' }}
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;