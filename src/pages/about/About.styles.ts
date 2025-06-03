import { media, theme } from "../../styles/theme/theme"; 
import styled from "styled-components";
import image_about from "../../assets/images/1alvorada.jpg";
import image_paulo_sergio from "../../assets/images/baianoVoandoSul_pb.jpg"

export const AboutWrap = styled.div`

.about-content {    
    align-items: center;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    width: auto;
  }

  .about-header {
    align-items: center;
    background-image: url(${image_about});
    background-size: cover;
    background-position: center;
    display: flex;    
    height: 30vh;
    justify-content: center;
    width: 100%;
  }

  .about-header-title{
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

  .about-section{
    align-items: center;
    background-color: ${theme.colors.white};
    display: flex;
    min-height: 10vh;
    justify-content: space-around;
    margin: 90px 0;
    width: 100%;

    ${media.lg`
      display: block;
    `}

    ${media.md`
      display: block;
    `}
  }

  .about-block {
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

  .about-block-title {
    align-items: center;
    color: ${theme.colors.black};
    display: flex; 
    font-size: 3rem;
    font-weight: 500;    
    padding: 30px 20px 5px;
    width: auto; 

    ${media.lg`
      font-size: 2rem;
      width: 100%;
    `}

    ${media.md`
      font-size: 2rem;
      width: 100%;
    `}
  }
  
  .about-block-text{
    align-items: center;  
    animation: slide-up-fade-in 0.6s ease-out forwards;
    background-color: ${theme.colors.white};  
    font-size: .9rem;
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

  .about-block-img {
    align-items: center;
    background-image: url(${image_paulo_sergio});
    background-position: center;
    background-size: cover;    
    display: flex;
    height: 30vh;
    justify-content: center;
    padding: 10px;
    width: 100%;

    ${media.lg`
      width: 100%;
    `}

    ${media.md`
      width: 100%;
    `}
  }

  .about-link {
    align-items: center;
    display: flex;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    border-radius: 6px;
    color: ${theme.colors.black};
    justify-content: center;
    padding: 9px 9px ;
    width: 135px;

    &:hover {
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.black};
      border-radius: 6px;
      color: ${theme.colors.black};
      cursor: pointer;
    }
  }
`