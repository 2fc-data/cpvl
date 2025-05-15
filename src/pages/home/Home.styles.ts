import { media, theme } from "../../styles/theme/theme";
import styled from "styled-components";
import image_se from "../../assets/images/se.jpg";

export const HomeWrap = styled.div`

  .home-content {
    align-items: center;
    background-image: url(${image_se});    
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: center;
    width: 100%;
  }

  .home-title{
    align-items: center;
    border: 2px solid ${theme.colors.white};
    color: ${theme.colors.white};
    display: flex;        
    font-size: 32px;
    font-weight: 700;
    justify-content: center;
    margin-top: -12rem;
    padding: 12px 20px;
    text-transform: uppercase;

    ${media.lg`
      font-size: 28px;
      margin-top: 0rem; 
      padding: 6px 10px;
    `}

    ${media.md`
      font-size: 20px;
      margin-top: -15rem; 
      padding: 6px 10px;
    `}
  }

  .home-subtitle{
    align-items: center;
    color: ${theme.colors.white};      
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    margin-top: 1rem;
  }
`;