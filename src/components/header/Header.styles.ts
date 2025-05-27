import styled from 'styled-components';
import { media, theme } from "../../styles/theme/theme";

export const HeaderWrap = styled.header`
  /* background-color: ${theme.colors.white}; */
  background-color: transparent;
  color: ${theme.colors.white};
  padding: 1rem 0rem;
  z-index: 1000;

  ${media.xl`
    padding: 1rem 0rem;
  `}

  .header-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    top: 0;
    margin: 0 35px;
  }

  .logo-section {
    border: none;    
    display: flex;
    align-items: center;
    gap: 1rem;
    

    .logo {
      width: 120px;
      height: 54px;

      img {
        border: none;
        border-radius: 3px;
        width: 99%;
        height: 99%;
        object-fit: contain;
      }
    }

    .brand-name {
      font-size: 1.5rem;
      font-weight: 700;

      ${media.md`
        display: none;
      `}
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;

    ${media.lg`
      display: none;
    `}
  }

  .nav-item {
    position: relative;    
    font-weight: 600;
    padding: 0.3rem 1rem;
    transition: ${theme.transitions.easeInOut};

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.skyBlueDark};
      border-radius: 6px;

      .submenu {
        display: block;
      }
    }
  }

  .submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${theme.colors.white};
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(255, 255, 255, 0.6);
    min-width: 200px;
    padding: 0.5rem 0;

    .submenu-item {
      border-bottom: 1px solid ${theme.colors.skyBlueDark};
      color: ${theme.colors.skyBlueDark};
      margin-left: 0.5rem;
      padding: 0.5rem;
      display: block;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: ${theme.colors.skyBlueDark};
        color: ${theme.colors.white};      
      }
    }
  }

  .mobile-menu-btn {
    color: ${theme.colors.skyBlueDark};
    display: none;   
    font-size: 1.5rem;
    cursor: pointer;

    ${media.lg`
      display: block;
    `}
  }

  .mobile-menu {
    display: none;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background-color: ${theme.colors.white};
    padding: 1rem;

    &.active {
      display: block;
    }

    .mobile-nav-item {
      color: ${theme.colors.skyBlueDark};
      padding: 0.75rem 1rem;
      display: block;
      border-bottom: 1px solid ${theme.colors.border};

      &:hover {
        background-color: ${theme.colors.skyBlueDark};
        color: ${theme.colors.white};      
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;