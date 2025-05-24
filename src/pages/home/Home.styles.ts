import { media, theme } from "../../styles/theme/theme";
import styled from "styled-components";
import image_se from "../../assets/images/rampaNorte.jpg";

export const HomeWrap = styled.div`  
  .home-content {
    align-items: center;
    background-image: url(${image_se});    
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 93vh;
    width: 100%;  
  }

  .home-title{
    align-items: center;
    color: ${theme.colors.lightGreen};
    display: flex;        
    font-size: 32px;
    font-weight: 700;
    justify-content: center;
    margin-top: 0rem;
    padding: 12px 20px;
    text-transform: uppercase;

    ${media.lg`
      font-size: 24px;
      margin: 0rem 3rem;
      padding: 6px 10px;
    `}

    ${media.md`
      font-size: 16px;
      margin-top: -15rem; 
      padding: 6px 10px;
    `}
  }

  .home-subtitle{
    align-items: center;
    color: ${theme.colors.lightGreen};
    display: flex;    
    font-size: 24px;
    font-weight: 600;
    justify-content: center;
    margin-top: 1rem;
  }
`;