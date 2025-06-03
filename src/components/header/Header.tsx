import React, { useState } from "react"; // Import React
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
import { toggleMenubar } from '../../redux/slices/menubarSlice'; 
// !! IMPORTANTE: Verifique se este caminho para RootState está correto !!
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

// Componente auxiliar MenuItem com tipagem explícita nas props
const MenuItem: React.FC<MenuItemProps> = ({ item, isMobile, closeMobileMenu }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  // CORREÇÃO LINHA 105: Separando handlers para Click e KeyDown

  // Handler para clique (mouse)
  const handleSubmenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (isMobile && item.submenu) {
      e.preventDefault(); // Previne navegação se o item principal tiver link
      setIsSubmenuOpen(!isSubmenuOpen);
    }
    // Se não for mobile ou não tiver submenu, o clique não faz nada aqui (navegação normal)
  };

  // Handler para teclado (Enter ou Espaço)
  const handleSubmenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (isMobile && item.submenu) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsSubmenuOpen(!isSubmenuOpen);
      }
    }
    // Outras teclas não fazem nada aqui
  };

  // Handler para clique em links (fecha menu mobile)
  const handleLinkClick = () => {
    if (isMobile) {
        closeMobileMenu();
    }
  };

  if (item.submenu) {
    return (
      <div
        className={`nav-item ${isMobile && isSubmenuOpen ? 'submenu-open' : ''}`}
        // Usa os handlers separados
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
                e.stopPropagation(); // Impede que o clique no link do submenu dispare handlers do pai
                handleLinkClick(); // Fecha o menu mobile ao clicar em um item do submenu
              }}
              // Permite fechar com Enter também
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
        onClick={handleLinkClick} // Fecha menu mobile ao clicar
        onKeyDown={(e) => { if (e.key === 'Enter') handleLinkClick(); }} // Fecha com Enter
      >
        <span>{item.icon}</span>
        <span>{item.title}</span>
      </Link>
    );
  }
};

export const Header: React.FC = () => { 
  // CORREÇÃO LINHA 170 (Verificação):
  // Este seletor está SINTATICAMENTE correto.
  // Se ainda der erro, o problema é 99% de certeza:
  // 1. O arquivo store.ts NÃO foi configurado corretamente (veja mensagem anterior).
  // 2. O tipo RootState importado de '../../redux/store' está incorreto ou o caminho está errado.
  const isMenubarOpen = useSelector((state: RootState) => state.menubar.isMenubarOpen);
  const dispatch = useDispatch();

  const handleToggleMenubar = () => {
    dispatch(toggleMenubar());
  };

  const handleCloseMenubar = () => {
    if (isMenubarOpen) {
      dispatch(toggleMenubar());
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

