import { media, theme } from "../../styles/theme/theme";
import styled from "styled-components";
import image_airspace from "../../assets/images/1alvorada.jpg";

export const AirspaceWrap = styled.div`

  .airspace-content {    
    align-items: center;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    width: auto;
  }

  .airspace-header {
    align-items: center;
    background-image: url(${image_airspace});
    background-size: cover;
    background-position: center;
    display: flex;    
    height: 30vh;
    justify-content: center;
    width: 100%;
  }

  .airspace-header-title{
    align-items: center;
    border: 2px solid ${theme.colors.white};
    color: ${theme.colors.white};     
    display: flex; 
    font-size: 18px;
    font-weight: 500;
    justify-content: center;
    padding: 6px 20px;
    text-transform: uppercase;
    width: auto;
  }

  .airspace-section{
    background-color: ${theme.colors.white};
    display: flex;
    min-height: 10vh;
    justify-content: space-around;
    margin: 90px 0;
    width: 100%;

    ${media.lg`
      display: block;
      margin: 30px 0;
    `}

    ${media.md`
      display: block;
      margin: 30px 0;
    `}
  }

  .airspace-block {
    align-items: start;  
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 20px 0px;
    text-align: justify;
    width: 45%;
    
    ${media.lg`
      width: 100%;
    `}

    ${media.md`
      width: 100%;
    `}
  }

  .airspace-block-btn {   
    align-items: end;  
    display: flex;    
    margin: 20px 0px;
    padding: 25px;
    width: 49%;
  }

  .airspace-block-title {
    align-items: center;
    color: ${theme.colors.black};
    display: flex; 
    font-size: 3rem;
    font-weight: 500;      
    margin-top: -1em;
    padding: 30px 20px 5px;
    width: auto; 
  }
  
  .airspace-block-text{
    align-items: center;
    animation: slide-up-fade-in 0.6s ease-out forwards;
    background-color: ${theme.colors.white};  
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    line-height: 2;
    padding: 10px 25px;
    text-align: justify;
    width: auto;
  }
  
  @keyframes slide-up-fade-in {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .airspace-block-paragraph {
    padding: 10px 60px;

    ${media.lg`
      padding: 10px 60px;
    `}

    ${media.md`
      padding: 10px 60px;
    `}
  }

  .airspace-link {
    align-items: center;
    display: flex;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    border-radius: 6px;
    color: ${theme.colors.lightBlack};
    justify-content: center;
    padding: 3px 9px ;
    width: 135px;

    &:hover {
      background-color: ${theme.colors.black};
      border: 1px solid ${theme.colors.white};
      border-radius: 6px;
      color: ${theme.colors.white};
      cursor: pointer;
    }
  }
`