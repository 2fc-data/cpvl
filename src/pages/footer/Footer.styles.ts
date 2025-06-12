import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";

export const FooterWrap = styled.div`
  align-items: center;  
  background-color: ${theme.colors.secondary};
  bottom: 0;
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
  padding: 60px 10px;
  width: 100%;

  .wrap {
    align-items: center;
    display: flex;    
    justify-content: center;
    max-width: 1200px;
    width: 100%;

    ${media.lg`
      display: flex-wrap;
      flex-direction: column;
      padding: 30px 9px;
      text-align: center;
    `}

    ${media.md`
      display: flex-wrap;
      flex-direction: column;
      margin-top: 0px;
      padding: 30px 9px;
      text-align: center;
    `}
  }

  .footer-block {
    align-items: center;
    border-radius: 6px;
    color: ${theme.colors.white};
    display: flex-wrap;
    justify-content: center;
    line-height: 2;
    margin: 20px 25px;
    min-height: 345px;
    padding: 20px 5px;    
    width: 270px;

    ${media.lg`
      padding: 15px 12px;
      width: 90%;
    `}
  }

  .footer-title {
    border-bottom: 3px solid ${theme.colors.white};    
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 30px;    
    text-transform: uppercase;

    ${media.lg`
      padding-left: 15px;
    `}
  }

  .footer-link {
    border-bottom: 1px solid ${theme.colors.whiteLight};
    color: ${theme.colors.white};
    font-weight: 600;
    margin-top: 10px;
    padding-left: 10px;
    text-align: left;

    ${media.md`
      padding-left: 10px;
    `}

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.secondary};
      border-radius: 3px;
    }
  }
`;
