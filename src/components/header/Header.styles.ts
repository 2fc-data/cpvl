import styled from 'styled-components';
import { media } from "../../styles/theme/theme"; // Verifique se este caminho está correto

// Estilos simplificados apenas para a estrutura do Header
export const HeaderWrap = styled.header`
  background-color: transparent; // Ou a cor de fundo desejada para o header
  padding: 1rem 0rem;
  position: relative; // Mantido para contexto, se necessário
  z-index: 1000; // Pode ajustar conforme a necessidade de sobreposição

  ${media.xl`
    padding: 1rem 0rem;
  `}

  .header-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 35px; // Considere usar variáveis de tema
  }

  // Estilos da seção do logo permanecem aqui
  .logo-section {
    border: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    // Garante que o logo fique acima do menu mobile se houver sobreposição
    // Ajuste se o Navbar for posicionado de forma diferente
    position: relative; 
    z-index: 1052; 

    .logo {
      width: 120px;
      height: 54px;
      display: block; 

      img {
        border: none;
        border-radius: 3px;
        width: 100%; 
        height: 100%; 
        object-fit: contain;
        display: block; 
      }
    }
  }

  // Todos os estilos de .nav-menu, .mobile-menu-btn, .mobile-menu, .overlay, .nav-item, .submenu 
  // foram movidos para Navbar.styles.ts
`;

