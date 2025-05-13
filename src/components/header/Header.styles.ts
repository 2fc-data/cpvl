import styled from 'styled-components';
import { media, theme } from "../../styles/theme/theme";

export const HeaderWrap = styled.header`
  background-color: ${theme.colors.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 1rem;

    .logo {
      width: 120px;
      height: 54px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .brand-name {
      color: ${theme.colors.white};
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
    color: ${theme.colors.white};
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: ${theme.transitions.easeInOut};

    &:hover {
      color: ${theme.colors.border};

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
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    min-width: 200px;
    padding: 0.5rem 0;

    .submenu-item {
      color: ${theme.colors.text};
      padding: 0.5rem 1rem;
      display: block;

      &:hover {
        background-color: ${theme.colors.border};
      }
    }
  }

  .mobile-menu-btn {
    display: none;
    color: ${theme.colors.white};
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
    background-color: ${theme.colors.primary};
    padding: 1rem;

    &.active {
      display: block;
    }

    .mobile-nav-item {
      color: ${theme.colors.white};
      padding: 0.75rem 1rem;
      display: block;
      border-bottom: 1px solid ${theme.colors.border};

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;