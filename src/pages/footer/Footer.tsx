import { FooterWrap } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterWrap className="footer-content">
      <div className="wrap">
        <div className="footer-block">
          <p className="footer-title">Institucional</p>
          <p className="footer-link"><a href="/direction">Diretoria</a></p>
          <p className="footer-link"><a href="/airspace">Espaço aéreo</a></p>
          <p className="footer-link"><a href="/statute">Estatuto</a></p>
          <p className="footer-link"><a href="/regiment">Regimento Interno</a></p>
          <p className="footer-link"><a href="/about">Sobre</a></p>
        </div>

        <div className="footer-block">
          <p className="footer-title">Rampa</p>
          <p className="footer-link"><a href="https://www.google.com/maps/@-21.7716455,-46.5746857,17z?entry=ttu">Mapa</a></p>
          <p className="footer-link">WP: -21.7715658,-46.5749861</p>
          <p className="footer-link">Altitude: 1550m</p>
          <p className="footer-link">Desnível: 400m</p>
          <p className="footer-link">Quadrante: S | NE | N | NW</p>
        </div>

        <div className="footer-block">
          <p className="footer-title">Midias Sociais</p>
          <p className="footer-link"><a href="https://www.facebook.com/cpvlpocos/">Facebook</a></p>
          <p className="footer-link"><a href="https://www.instagram.com/cpvloficial/">Instagram</a></p>
        </div>
      </div>
    </FooterWrap>
  )
}