import React, { useState, useEffect } from "react";
import { NavbarWrap } from './Navbar.styles'; // Importa os estilos do Navbar
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
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
// Ajuste os caminhos conforme sua estrutura
import { toggleMenubar, setMenubarClose } from '../../redux/slices/menubarSlice'; 
import { RootState } from '../../redux/store'; 

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

// Definição da estrutura do Menu
const Menu: MenuItemType[] = [
  {
    title: " Home",
    icon: <MdHome size={20} />,
    link: "/",
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

  const handleAnyLinkClick = (event?: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>) => {
    if (isMobile) {
        if (isSubmenuOpen) {
            setIsSubmenuOpen(false);
        }
        closeMobileMenu();
    }
    
    if (!isMobile && event && event.currentTarget) {
        (event.currentTarget as HTMLElement).blur(); 
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
                handleAnyLinkClick(e); 
              }}
              onKeyDown={(e) => { if (e.key === 'Enter') handleAnyLinkClick(e); }}
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
        onClick={(e) => handleAnyLinkClick(e)} 
        onKeyDown={(e) => { if (e.key === 'Enter') handleAnyLinkClick(e); }}
      >
        <span>{item.icon}</span>
        <span>{item.title}</span>
      </Link>
    );
  }
};

// Componente Navbar
export const Navbar: React.FC = () => {
  const isMenubarOpen = useSelector((state: RootState) => state.menubar.isMenubarOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const lgBreakpoint = 992; 
      if (window.innerWidth >= lgBreakpoint && isMenubarOpen) {
        dispatch(setMenubarClose());
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenubarOpen, dispatch]); 

  const handleToggleMenubar = () => {
    dispatch(toggleMenubar());
  };

  const handleCloseMenubar = () => {
    if (isMenubarOpen) {
      dispatch(setMenubarClose());
    }
  };

  return (
    // Passa o estado isMenubarOpen para o styled component
    <NavbarWrap $isMenubarOpen={isMenubarOpen}> 
      <div
        className={`overlay ${isMenubarOpen ? 'active' : ''}`}
        onClick={handleCloseMenubar}
        aria-hidden={!isMenubarOpen} 
      />

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
    </NavbarWrap>
  );
};
