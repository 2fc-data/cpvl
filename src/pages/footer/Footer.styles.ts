import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";
import footerBg from "../../assets/images/footerBg.jpg";


export const FooterWrap = styled.div`
  align-items: center;  
  background-image: url(${footerBg});
  background-size: cover;
  background-position: center;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
  padding: 130px 10px;
  width: 100%;

  ${media.lg`
    display: flex-wrap;
    flex-direction: column;
    padding: 45px 9px;
    text-align: center;
  `}

  ${media.md`
    display: flex-wrap;
    flex-direction: column;
    margin-top: 0px;
    padding: 30px 9px;
    text-align: center;
  `}

  .footer-block {
    align-items: center;
    background-color: ${theme.colors.lightWhite};
    border-radius: 6px;
    color: ${theme.colors.lightBlack};
    display: flex-wrap;
    justify-content: lcenter;
    line-height: 2;
    margin: 20px 10px;
    min-height: 345px;
    padding: 20px 10px;    
    width: 300px;

    ${media.lg`
      padding: 15px 12px;
      width: 90%;
    `}

  }

  .footer-title {
    border-bottom: 3px solid ${theme.colors.lightBlack};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 30px;    
    text-transform: uppercase;

    ${media.lg`
      padding-left: 15px;
    `}
  }

  .footer-link {
    border-bottom: 1px solid ${theme.colors.black};    
    font-weight: 600;
    margin-top: 10px;
    padding-left: 10px;
    text-align: left;

    ${media.md`
      padding-left: 10px;
    `}

    &:hover {
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      border-radius: 3px;
    }
  }
`;