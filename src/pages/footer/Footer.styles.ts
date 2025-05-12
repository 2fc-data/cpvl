import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";

export const FooterWrap = styled.div`
  background-color: ${theme.colors.white};
  bottom: 0;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  padding: 20px 10px;
  width: 100%;

  ${media.lg`
    display: flex-wrap;
    flex-direction: column;
    padding: 15px 12px;
    text-align: center;
  `}

  ${media.md`
    display: flex-wrap;
    flex-direction: column;
    padding: 10px 9px;
    text-align: center;
  `}

  .footer-block {
    align-items: center;
    color: ${theme.colors.black};
    display: flex-wrap;
    justify-content: center;
    line-height: 2;
    margin: 0 10px;
    min-width: 240px;
    padding: 20px 10px;
  }

  .footer-title {
    border-bottom: 1px solid ${theme.colors.black};
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .footer-link {
    color: ${theme.colors.black};
    margin-top: 10px;
    padding-left: 15px;

    ${media.md`
      padding-left: 0px;
    `}

    &:hover {
      background-color: ${theme.colors.white};
      border-radius: 3px;
      color: ${theme.colors.black};
    }
  }
`;