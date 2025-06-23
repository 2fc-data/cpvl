import React, { useState, useEffect } from "react";
import { NavbarWrap } from './NavbarDashboard.styles'; 

import {
  MdMenu,
  MdClose
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';

import { toggleMenubar, setMenubarClose } from '../../../redux/slices/menubarSlice'; 
import { RootState } from '../../../redux/store'; 

interface SubmenuItemType {
  title: string;
  icon: React.ReactNode; 
  link: string;
}

interface MenuItemType {
  title: string;
  link: string;
  submenu?: SubmenuItemType[]; 
}

interface MenuItemProps {
  item: MenuItemType;
  isMobile: boolean;
  closeMobileMenu: () => void; 
}

const Menu: MenuItemType[] = [
  {
    title: "Pilots",    
    link: "pilots",
  }
];


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
        <span>{item.title}</span>
        {!isMobile && <IoIosArrowDown size={20} className='arrowDown-icon-details arrowUp-icon-details' />}
        {isMobile && <IoIosArrowDown size={20} className={`arrowDown-icon-details ${isSubmenuOpen ? 'rotated' : ''}`} />}

        <div className={`submenu ${isMobile && isSubmenuOpen ? 'active' : ''}`}>
          {item.submenu.map((submenuItem) => (
            <NavLink
              to={submenuItem.link}
              className={() => isMobile ? "submenu-item-mobile" : "submenu-item" }
              key={submenuItem.title}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.stopPropagation(); 
                handleAnyLinkClick(e); 
              }}
              onKeyDown={(e) => { if (e.key === 'Enter') handleAnyLinkClick(e); }}
            >
              <span className="submenu-icon">{submenuItem.icon}</span>
              <span>{submenuItem.title}</span>
            </NavLink>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink
        to={item.link}
        className={() => isMobile ? "nav-item-mobile" : "nav-item" }
        onClick={(e) => handleAnyLinkClick(e)} 
        onKeyDown={(e) => { if (e.key === 'Enter') handleAnyLinkClick(e); }}
        end
      >
        <span>{item.title}</span>
      </NavLink>
    );
  }
};


export const NavbarDashboard = () => {
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
    <NavbarWrap>
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
