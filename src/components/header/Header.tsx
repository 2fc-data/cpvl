import { HeaderWrap } from './Header.styles';
import { FaBuilding } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import {
  MdAirplanemodeActive,
  MdHome,
  MdMenuBook,
  MdParagliding
} from "react-icons/md";
import { MdMenu } from "react-icons/md";
import Logo from '../../assets/images/logo_cpvl.svg';
import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = [
  {
    title: " Home",
    icon: <MdHome size={20} />,
    link: "/home",
  },
  {
    title: " Sobre",
    icon: <MdMenuBook size={20} />,
    link: "/about",
    submenu: [
      {
        title: " Diretoria",
        icon: <FaBuilding size={20} />,
        link: "/direction",
      },
      {
        title: " Espaco Aereo",
        icon: <MdAirplanemodeActive size={20} />,
        link: "/airspace",
      },
      {
        title: " Estatuto",
        icon: <MdMenuBook size={20} />,
        link: "/statute",
      },
      {
        title: " História",
        icon: <FaFilePen size={20} />,
        link: "/about",
      },
      {
        title: " Regimento Interno",
        icon: <MdMenuBook size={20} />,
        link: "/regiment",
      },
    ]
  },
  {
    title: "Associados",
    icon: <MdParagliding size={20} />,
    link: "/login",
  },
];


export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderMenu = () => {
    return Menu.map((menuItem) => {
      if (menuItem.submenu) {
        return (
          <div className="nav-item" key={menuItem.title}>
            <span>{menuItem.icon}</span>
            <span>{menuItem.title}</span>
            <div className="submenu">
              {menuItem.submenu.map((submenuItem) => (
                <Link to={submenuItem.link} className="submenu-item" key={submenuItem.title}>
                  <span>{submenuItem.icon}</span>
                  <span>{submenuItem.title}</span>
                </Link>
              ))}
            </div>
          </div>
        );
      } else {
        return (
          <Link to={menuItem.link} className="nav-item" key={menuItem.title}>
            <span>{menuItem.icon}</span>
            <span>{menuItem.title}</span>
          </Link>
        );
      }
    });
  };

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
          {renderMenu()}
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MdMenu size={36} />
        </button>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {renderMenu()}
        </div>
      </div>
    </HeaderWrap>
  );
};
