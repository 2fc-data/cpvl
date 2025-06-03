import styled from 'styled-components';
import { media, theme } from "../../styles/theme/theme"; 

export const NavbarWrap = styled.div` 
  .nav-menu {
    align-items: center;
    display: flex; 
    gap: 1.5rem;

    ${media.lg`
      display: none; 
    `}
  }
  
  .mobile-menu-btn {
    background: none;
    border: none;
    color: ${theme.colors.skyBlueDark}; 
    cursor: pointer;
    display: none; 
    font-size: 1.5rem; 
    padding: 0.5rem; 
    z-index: 1051; 

    ${media.lg`
      display: block; 
    `}
  }
  
  .mobile-menu {
    display: none; 
    
    ${media.lg` 
      display: block; 
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.white}; 
      padding: 6rem 1rem 1rem 1rem; 
      transform: translateX(-100%); 
      transition: transform 0.3s ease-in-out;
      overflow-y: auto; 
      z-index: 1050; 

      &.active {
        transform: translateX(0); 
      }
      
      .nav-item {
        display: block; 
        width: 100%;
        text-align: left;
        padding: 1rem 1.5rem; 
        margin-bottom: 0; 
        border-top: none; 
        border-bottom: 1px solid ${theme.colors.skyBlue}; 
        color: ${theme.colors.lightBlack}; 
        font-weight: 500;
        cursor: pointer; 
        position: static; 

        &:hover,
        &:focus {
          background-color: ${theme.colors.lightGreen}; 
          color: ${theme.colors.white};
          border-top: none; 
        }

        &:last-child {
          border-bottom: none;
        }

        .arrowDown-icon-details {
          display: inline-block; 
          transition: transform 0.3s ease-out;
          &.rotated {
             transform: rotate(-180deg);
          }
        }
        .arrowUp-icon-details { 
             display: none; 
        }
      }

      .submenu {
        position: static; 
        display: none; 
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        padding: 0.5rem 0 0.5rem 1.5rem; 
        background-color: transparent;
        transition: none; 
        border-top: 1px solid ${theme.colors.skyBlue}; 
        margin-left: -1.5rem; 
        margin-right: -1.5rem;
        border-radius: 0; 
        min-width: auto; 

        &.active { 
           display: block;
        }

        .submenu-item {
          padding: 0.75rem 1.5rem; 
          border: none;
          color: ${theme.colors.lightBlack}; 
          display: flex; 
          gap: 0.5rem;
          white-space: nowrap;

          &:hover,
          &:focus {
            background-color: transparent; 
            color: ${theme.colors.black}; 
          }
        }
      }
    `}
  }
  
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1040; 
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    display: none; 

    ${media.lg` 
      &.active {
        display: block; 
        opacity: 1;
        visibility: visible;
      }
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
    text-decoration: none; 
    cursor: pointer; 

    @media (min-width: ${theme.breakpoints.lg}) {
        padding-bottom: 0.8rem; 
        margin-bottom: -0.5rem; 
    }

    .arrowDown-icon-details {
      transition: ${theme.transitions.easeInOut};
      
      ${media.lg`
         display: none;
      `}
    }
    
    &:has(.submenu) .arrowDown-icon-details {
        display: inline-block;
    }

    &:hover,
    &:focus-within { 
      @media (min-width: ${theme.breakpoints.lg}) { 
          border-top: 3px solid ${theme.colors.black};
          color: ${theme.colors.black};
          background-color: transparent; 

          .submenu {
            display: block; 
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          
          .arrowDown-icon-details { 
            transform: rotate(-180deg);
            transition: transform 0.3s ease-out;
          }
      }
    }

    &:active {
       @media (min-width: ${theme.breakpoints.lg}) {
           border-top: 3px solid ${theme.colors.black};
       }
    }
  }
  
  .submenu {
    display: none; 
    opacity: 0; 
    visibility: hidden; 
    position: absolute;
    left: 0;
    background-color: ${theme.colors.lightWhite};
    border-radius: 6px;
    box-shadow: 0 2px 3px ${theme.colors.lightBlack};
    min-width: 200px;
    padding: 0.5rem 0;
    z-index: 1010; 
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, transform 0.2s ease-in-out;
    transform: translateY(-10px); 
   
    @media (min-width: ${theme.breakpoints.lg}) {
        top: calc(100% - 0.5rem); 
        padding-top: 0.8rem; 
    }

    .submenu-item {
      align-items: center;
      color: ${theme.colors.lightBlack};
      display: flex; 
      gap: 0.5rem; 
      padding: 0.75rem 1rem; 
      text-decoration: none; 
      white-space: nowrap; 

      &:last-child {
        border-bottom: none;
      }

      &:hover,
      &:focus {
        background-color: ${theme.colors.white};
        color: ${theme.colors.black};
      }

      .submenu-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
