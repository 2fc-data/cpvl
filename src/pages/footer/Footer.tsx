import { Link } from "react-router-dom";
import { FooterWrap } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterWrap className="footer-content">
      <div className="footer-block">
        <p className="footer-title">Institucional</p>
        <p className="footer-link"><Link to="/direction">Diretoria</Link></p>
        <p className="footer-link"><Link to="/airspace">Espaço aéreo</Link></p>
        <p className="footer-link"><Link to="/statute">Estatuto</Link></p>
        <p className="footer-link"><Link to="/regiment">Regimento Interno</Link></p>
        <p className="footer-link"><Link to="/about">Sobre</Link></p>
      </div>

      <div className="footer-block">
        <p className="footer-title">Midias Sociais</p>
        <p className="footer-link"><Link to="https://www.facebook.com/cpvlpocos/">Facebook</Link></p>
        <p className="footer-link"><Link to="https://www.instagram.com/clubpocoscaldensedevoo_oficial/">Instagram</Link></p>
      </div>

      <div className="footer-block">
        <p className="footer-title">Rampa</p>
        <p className="footer-link"><Link to="https://www.google.com/maps/@-21.7716455,-46.5746857,17z?entry=ttu">Mapa</Link></p>
        <p className="footer-link">WP: -21.7715658,-46.5749861</p>
        <p className="footer-link">Altitude: 1550m</p>
        <p className="footer-link">Desnível: 400m</p>
        <p className="footer-link">Quadrante: S | NE | N | NW</p>
      </div>

      <div className="footer-block">
        <p className="footer-title">Parceiros</p>
        <p className="footer-link"><Link to="https://citur.com.br/">Citur</Link></p>
        <p className="footer-link"><Link to="https://pocosdecaldas.mg.gov.br/">Prefeitora Poços de Caldas</Link></p>
      </div>
    </FooterWrap>
  )
}