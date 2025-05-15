// import { useDispatch } from "react-redux";
import { HeaderWrap } from './Header.styles';
// import { setSidebarOpen } from "../../redux/slices/sidebarSlice";
import { MdMenu } from "react-icons/md";
import Logo from '../../assets/images/logo_cpvl.svg';
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  // const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <HeaderWrap>
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo">
            <img src={Logo} alt="CPVL Logo" />
          </Link>
          {/* <span className="brand-name">Clube Poços-caldense de Vôo Livre</span> */}
        </div>

        <nav className="nav-menu">
          <Link to="/home" className="nav-item">Home</Link>
          <div className="nav-item">
            Sobre
            <div className="submenu">
              <Link to="/direction" className="submenu-item">Diretoria</Link>
              <Link to="/airspace" className="submenu-item">Espaço Aéreo</Link>
              <Link to="/statute" className="submenu-item">Estatuto</Link>
              <Link to="/regiment" className="submenu-item">Regimento Interno</Link>
              <Link to="/about" className="submenu-item">História</Link>
            </div>
          </div>
          <Link to="/login" className="nav-item">Área Associados</Link>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MdMenu size={36} />
        </button>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/home" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>Home</Link>
          <Link to="/login" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>Área Associados</Link>
          <Link to="/direction" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>Diretoria</Link>
          <Link to="/airspace" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>Espaço Aéreo</Link>
          <Link to="/statute" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>Estatuto</Link>
          <Link to="/regiment" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>Regimento Interno</Link>
          <Link to="/about" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>História</Link>
        </div>
      </div>
    </HeaderWrap>
  );
};