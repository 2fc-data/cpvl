import styled from 'styled-components';
import { media, theme } from "../../styles/theme/theme";

export const HeaderWrap = styled.header`
  padding: 1rem 0rem;
  position: relative; 
  z-index: 1000;

  ${media.xl`
    padding: 1rem 0rem;
  `}

  .header-container {
    align-items: center;
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: space-between;
    padding: 0 45px; // Usar variáveis de tema
  }

  .logo-section {
    border: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative; 
    z-index: 1052; 

    .logo {
      width: 200px;
      height: 134px;
      display: block; 

      ${media.lg`
        width: 160px;
        height: 84px;
      `}

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
`;

