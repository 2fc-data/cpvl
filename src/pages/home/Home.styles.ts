import { media, theme } from "../../styles/theme/theme";
import styled from "styled-components";
import image_se from "../../assets/images/rampanorteAprox2.jpg";

export const HomeWrap = styled.div`

  .home-content {
    align-items: center;
    background-image: url(${image_se});  
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    height: 100VH;
    justify-content: center;
    margin-top: -11rem;
    width: 100%;

  .home-title{
    align-items: center;
    color: ${theme.colors.white};
    display: flex;    
    font-size: 36px;
    font-weight: 800;
    justify-content: center;
    margin-top: -500px;

    padding: 12px 20px;
    text-transform: uppercase;

    ${media.lg`
      font-size: 26px;
      font-weight: 700;
      margin-top: -12rem;
      padding: 6px 10px;
    `}

    ${media.md`
      font-size: 14px;
      font-weight: 700;
      margin-top: -9rem;
      padding: 6px 10px;
    `}
  }

  .home-subtitle{
    align-items: center;
    color: ${theme.colors.white};
    display: flex;       
    font-size: 36px;
    font-weight: 800;
    justify-content: center;
    margin-top: 1rem;
  }
}
`;
