import styled from 'styled-components';
import { media, theme } from "../../styles/theme/theme";

export const HeaderWrap = styled.header`
  /* background-color: ${theme.colors.white}; */
  background-color: transparent;
  /* color: ${theme.colors.white}; */
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
    align-items: center;
    display: flex;
    flex: -1;
    gap: 1.5rem;
    min-height: calc(100% - 84px);
    
    ${media.lg`
      display: none;
    `}
  }

  .nav-item {    
    align-items: center;
    border-radius: 3px;
    border-top: 3px solid transparent;
    color: ${theme.colors.lightBlack};
    display: flex;
    font-weight: 600;
    gap: 0.5rem;
    justify-content: center;
    min-width: 120px;
    padding: 0.3rem;
    position: relative;
    width: 100%;

    .arrowDown-icon-details {
      transition: ${theme.transitions.easeInOut};
    }

    ${media.lg`
      justify-content: left;
      margin: 1rem 0 0 1.5rem;

    `}

    &:hover {      
      border-top: 3px solid ${theme.colors.black};  
      color: ${theme.colors.black};

      .submenu {
        display: block;
      }

      .arrowUp-icon-details {
        transform: rotate(-180deg); 
        transition: transform 0.3s ease-out;
      }
    }

    &:active {
      border-top: 3px solid ${theme.colors.black};      
    }
  }

  .submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${theme.colors.lightWhite};
    border-radius: 6px;
    box-shadow: 0 2px 3px ${theme.colors.lightBlack};
    min-width: 200px;
    padding: 0.5rem 0;

    .submenu-item {
      align-items: center;
      border-bottom: 1px solid ${theme.colors.lightBlack};
      color: ${theme.colors.lightBlack};
      display: block;
      margin-left: 0.5rem;
      padding: 0.5rem;


      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.black}; 
      }


      .submenu-icon {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .mobile-menu-btn {
    color: ${theme.colors.skyBlueDark};
    cursor: pointer;
    display: none;   
    font-size: 1.5rem;

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
      height: 100%;
    }

    .mobile-nav-item {
      color: ${theme.colors.lightGreen};
      padding: 0.75rem 1rem;
      display: block;
      border-bottom: 1px solid ${theme.colors.skyBlue};

      &:hover {
        background-color: ${theme.colors.lightGreen};
        color: ${theme.colors.white};      
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;