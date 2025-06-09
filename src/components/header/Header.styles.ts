import styled from 'styled-components';
import { media } from "../../styles/theme/theme";

export const HeaderWrap = styled.header`
  padding: 1rem 0rem;
  position: relative; 
  z-index: 1000;

  ${media.xl`
    padding: 1rem 0rem;
  `}

  .header-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 35px; // Usar variáveis de tema
  }

  .logo-section {
    border: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative; 
    z-index: 1052; 

    .logo {
      width: 180px;
      height: 114px;
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
`;

