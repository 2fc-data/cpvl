import React, { useState, useEffect } from "react"; // Import useEffect
import { HeaderWrap } from './Header.styles';
import { FaBuilding } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import {
  MdAirplanemodeActive,
  MdHome,
  MdMenuBook,
  MdParagliding,
  MdMenu,
  MdClose
} from "react-icons/md";
import Logo from '../../assets/images/logo_cpvl.svg'; // Verifique se este caminho está correto
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
// Ajuste o caminho para o seu slice menubarSlice
// Importa tanto toggle quanto a ação específica de fechar
import { toggleMenubar, setMenubarClose } from '../../redux/slices/menubarSlice'; 
// !! IMPORTANTE: Verifique se este caminho para RootState está correto !!
import { RootState } from '../../redux/store'; 
// Opcional: Importar o tema se quiser usar o valor do breakpoint dinamicamente
// import { theme } from '../../styles/theme/theme';

// --- Definições de Tipo --- 
interface SubmenuItemType {
  title: string;
  icon: React.ReactNode; 
  link: string;
}

interface MenuItemType {
  title: string;
  icon: React.ReactNode;
  link: string;
  submenu?: SubmenuItemType[]; 
}

interface MenuItemProps {
  item: MenuItemType;
  isMobile: boolean;
  closeMobileMenu: () => void; 
}
// --- Fim das Definições de Tipo ---

const Menu: MenuItemType[] = [
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

// Componente auxiliar MenuItem
const MenuItem: React.FC<MenuItemProps> = ({ item, isMobile, closeMobileMenu }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleSubmenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (isMobile && item.submenu) {
      e.preventDefault(); 
      setIsSubmenuOpen(!isSubmenuOpen);
    }
  };

  const handleSubmenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (isMobile && item.submenu) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsSubmenuOpen(!isSubmenuOpen);
      }
    }
  };

  const handleLinkClick = () => {
    if (isMobile) {
        closeMobileMenu();
    }
  };

  if (item.submenu) {
    return (
      <div
        className={`nav-item ${isMobile && isSubmenuOpen ? 'submenu-open' : ''}`}
        onClick={handleSubmenuClick} 
        onKeyDown={handleSubmenuKeyDown}
        role="button" 
        tabIndex={0} 
        aria-haspopup="true"
        aria-expanded={isMobile ? isSubmenuOpen : undefined}
      >
        <span>{item.icon}</span>
        <span>{item.title}</span>
        {!isMobile && <IoIosArrowDown size={20} className='arrowDown-icon-details arrowUp-icon-details' />}
        {isMobile && <IoIosArrowDown size={20} className={`arrowDown-icon-details ${isSubmenuOpen ? 'rotated' : ''}`} />}

        <div className={`submenu ${isMobile && isSubmenuOpen ? 'active' : ''}`}>
          {item.submenu.map((submenuItem) => (
            <Link
              to={submenuItem.link}
              className="submenu-item"
              key={submenuItem.title}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.stopPropagation(); 
                handleLinkClick(); 
              }}
              onKeyDown={(e) => { if (e.key === 'Enter') handleLinkClick(); }}
            >
              <span className="submenu-icon">{submenuItem.icon}</span>
              <span>{submenuItem.title}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link
        to={item.link}
        className="nav-item"
        onClick={handleLinkClick} 
        onKeyDown={(e) => { if (e.key === 'Enter') handleLinkClick(); }}
      >
        <span>{item.icon}</span>
        <span>{item.title}</span>
      </Link>
    );
  }
};

// Componente Principal Header
export const Header: React.FC = () => { 
  const isMenubarOpen = useSelector((state: RootState) => state.menubar.isMenubarOpen);
  const dispatch = useDispatch();

  // --- LÓGICA DE RESIZE --- 
  useEffect(() => {
    const handleResize = () => {
      // Defina o breakpoint lg. Use o valor do seu tema se possível.
      // Exemplo: const lgBreakpoint = parseInt(theme.breakpoints.lg, 10);
      const lgBreakpoint = 992; // Usando valor fixo como exemplo

      if (window.innerWidth >= lgBreakpoint && isMenubarOpen) {
        // Se a janela for maior/igual a 'lg' E o menu estiver aberto,
        // despacha a ação para fechar o menu.
        dispatch(setMenubarClose());
      }
    };

    // Adiciona o listener quando o componente monta
    window.addEventListener('resize', handleResize);

    // Chama uma vez para verificar o estado inicial
    handleResize();

    // Remove o listener quando o componente desmonta (cleanup)
    return () => window.removeEventListener('resize', handleResize);

  }, [isMenubarOpen, dispatch]); // Dependências: re-executa se o estado do menu ou dispatch mudarem
  // --- FIM DA LÓGICA DE RESIZE ---

  const handleToggleMenubar = () => {
    dispatch(toggleMenubar());
  };

  // Função explícita para fechar (usada pelo overlay, logo, links)
  const handleCloseMenubar = () => {
    if (isMenubarOpen) {
      // Usa a ação específica de fechar para clareza
      dispatch(setMenubarClose());
    }
  };

  return (
    <HeaderWrap>
      <div
        className={`overlay ${isMenubarOpen ? 'active' : ''}`}
        onClick={handleCloseMenubar}
        aria-hidden={!isMenubarOpen} 
      />

      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo" onClick={handleCloseMenubar}>
            <img src={Logo} alt="CPVL Logo" />
          </Link>
        </div>

        <nav className="nav-menu" aria-label="Menu Principal">
          {Menu.map((menuItem) => (
            <MenuItem key={menuItem.title} item={menuItem} isMobile={false} closeMobileMenu={() => {}} />
          ))}
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={handleToggleMenubar} 
          aria-label={isMenubarOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenubarOpen}
          aria-controls="mobile-menu-nav" 
        >
          {isMenubarOpen ? <MdClose size={36} /> : <MdMenu size={36} />}
        </button>

        <div
          id="mobile-menu-nav" 
          className={`mobile-menu ${isMenubarOpen ? 'active' : ''}`}
          aria-hidden={!isMenubarOpen}
        >
          <nav aria-label="Menu Mobile">
            {Menu.map((menuItem) => (
              <MenuItem key={menuItem.title} item={menuItem} isMobile={true} closeMobileMenu={handleCloseMenubar} />
            ))}
          </nav>
        </div>
      </div>
    </HeaderWrap>
  );
};

