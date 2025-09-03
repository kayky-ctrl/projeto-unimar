function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <h3>UNIMAR Connect</h3>
                    <p>Portal de serviços integrados da Universidade de Marília</p>
                    <p>Desenvolvido para melhorar sua experiência acadêmica</p>
                </div>
                <div>
                    <h3>Contato</h3>
                    <p><i className="fas fa-envelope"></i> Email: connect@unimar.br</p>
                    <p><i className="fas fa-phone"></i> Telefone: (14) 2105-4000</p>
                    <p><i className="fas fa-map-marker-alt"></i> Endereço: Av. Higyno Muzzy Filho, 1001</p>
                </div>
                <div>
                    <h3>Redes Sociais</h3>
                    <p>Acompanhe a UNIMAR nas redes sociais</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;