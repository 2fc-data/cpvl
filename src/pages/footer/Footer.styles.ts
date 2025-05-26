import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";


export const FooterWrap = styled.div`
  align-items: center;
  background-color: ${theme.colors.lightGreen};
  bottom: 0;
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
  padding: 130px 10px;
  width: 100%;

  ${media.lg`
    display: flex-wrap;
    flex-direction: column;
    padding: 15px 9px;
    text-align: center;
  `}

  ${media.md`
    display: flex-wrap;
    flex-direction: column;
    margin-top: 0px;
    padding: 10px 9px;
    text-align: center;
  `}

  .footer-block {
    align-items: center;
    background-color: ${theme.colors.white};
    border-radius: 6px;
    box-shadow: 0px 3px 6px rgba(250, 249, 249, 0.3);
    color: ${theme.colors.lightGreen};
    display: flex-wrap;
    justify-content: center;
    line-height: 2;
    margin: 20px 10px;
    min-height: 345px;
    padding: 20px 10px;
    width: 270px;

    ${media.lg`
      padding: 15px 12px;
      width: 95%;
    `}
  }

  .footer-title {
    border-bottom: 3px solid ${theme.colors.lightGreen};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 30px;    
    text-transform: uppercase;

    ${media.lg`
      padding-left: 15px;
    `}
  }

  .footer-link {
    border-bottom: 1px solid ${theme.colors.lightGray};
    margin-top: 10px;
    padding-left: 10px;
    text-align: left;

    ${media.md`
      padding-left: 10px;
    `}

    &:hover {
      background-color: ${theme.colors.lightGreen};
      border-radius: 3px;
    }
  }
`;