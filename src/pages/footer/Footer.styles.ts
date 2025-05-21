import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";
import bg_footer from "../../assets/images/gramaFooter.jpg";

export const FooterWrap = styled.div`  
  background-image: url(${bg_footer});
  bottom: 0;
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
  padding: 130px 10px;
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
    margin-top: 30px;
    padding: 10px 9px;
    text-align: center;
  `}

  .footer-block {
    align-items: center;
    background-color: rgba(20, 38, 20, 0.6);
    border-radius: 6px;
    box-shadow: 0px 4px 6px rgba(255, 255, 255, 0.3);
    color: ${theme.colors.white};
    display: flex-wrap;
    justify-content: center;
    line-height: 2;
    margin: 20px 10px;
    min-width: 240px;
    padding: 20px 10px;
  }

  .footer-title {
    border-bottom: 1px solid ${theme.colors.lightGreen};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  .footer-link {
    margin-top: 10px;
    padding-left: 10px;

    ${media.md`
      padding-left: 0px;
    `}

    &:hover {
      background-color: ${theme.colors.lightGreen};
      border-radius: 6px;
    }
  }
`;