import styled, { css } from 'styled-components';
import { media, theme } from "../../styles/theme/theme"; // Verifique se este caminho está correto

// Estilos movidos do Header.styles.ts para o Navbar
// Adiciona a prop $isMenubarOpen para controle de estilo condicional
export const NavbarWrap = styled.div<{ $isMenubarOpen?: boolean }>`
  // --- LÓGICA DE VISIBILIDADE --- 

  // Menu Desktop (Visível > lg)
  .nav-menu {
    align-items: center;
    display: flex; 
    gap: 1.5rem;

    ${media.lg`
      display: none; 
    `}
  }

  // --- Estilos Desktop (> lg) --- 

  // Estilos base do .nav-item (aplicados principalmente no desktop)
  .nav-item {
    align-items: center;
    border-radius: 6px;
    border-top: 3px solid transparent; 
    color: ${theme.colors.black};
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
          background-color: ${theme.colors.white}; 

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

  // Estilos do submenu SOMENTE no desktop
  .submenu {
    border-radius: 6px;
    display: none; 
    opacity: 0; 
    visibility: hidden; 
    position: absolute;
    left: 0;
    background-color: ${theme.colors.white};
    border-radius: 6px;
    box-shadow: 0 2px 3px ${theme.colors.text};
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
      border-radius: 6px;
      color: ${theme.colors.black};
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
        background-color: ${theme.colors.text};
        color: ${theme.colors.white};
      }

      .submenu-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }


  // Botão Mobile (Visível <= lg)
  .mobile-menu-btn {
    background: none;
    border: none;
    color: ${theme.colors.black}; 
    cursor: pointer;
    display: none; // Escondido por padrão (telas > lg)
    font-size: 1.5rem; 
    padding: 0.5rem; 
    z-index: 1051; // Acima do overlay e menu
    position: relative; // Posição padrão
    top: auto; // Reseta top
    right: auto; // Reseta right

    ${media.lg`
      display: block; // VISÍVEL em telas <= lg

      // **CORREÇÃO BOTÃO X:** Aplica position: fixed QUANDO o menu está aberto
      ${({ $isMenubarOpen }) =>
      $isMenubarOpen &&
      css`
          position: fixed;
          top: 1.5rem; // Ajuste conforme necessário para alinhar com o header
          right: 35px; // Ajuste conforme a margem do header-container
          // Garante que a cor seja visível sobre o fundo branco do menu
          color: ${theme.colors.black}; 
        `}
    `}
  }

  // Container Mobile (Visível e funcional <= lg)
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

      // Estilos do .nav-item DENTRO do mobile-menu
      .nav-item {
        display: block; 
        width: 100%;
        text-align: left;
        padding: 1rem 1.5rem; 
        margin-bottom: 0; 
        border-top: none; 
        border-bottom: 1px solid ${theme.colors.black}; 
        color: ${theme.colors.black}; 
        font-weight: 500;
        cursor: pointer; 
        position: static; 

        &:hover,
        &:focus {
          background-color: ${theme.colors.text}; 
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

      // Estilos do .submenu DENTRO do mobile-menu
      .submenu {
        position: static; 
        display: none; 
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        padding: 0.5rem 0 0.5rem 1.5rem; 
        background-color: ${theme.colors.white}; 
        transition: none; 
        border-top: 1px solid ${theme.colors.black}; 
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
          color: ${theme.colors.black}; 
          display: flex; 
          gap: 0.5rem;
          white-space: nowrap;

          &:hover,
          &:focus {
            background-color: ${theme.colors.text}; 
            color: ${theme.colors.white}; 
          }
        }
      }
    `}
  }

  // Overlay (Visível e funcional <= lg quando ativo)
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

`;
