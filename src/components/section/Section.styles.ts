import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";


export const SectionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  padding: 30px 0px;

  ${media.xl`
    margin: 15px 0;
    padding: 10px 0;
  `}

  ${media.lg`
    flex-direction: column;
    padding: 8px 0;
    text-align: justify;
  `}

  ${media.md`
    flex-direction: column;
    justify-content: center;
    padding: 5px 0;
    text-align: justify;
  `}

  .section-content {
    margin: 15px 0;
    padding: 15px; 
    width: 100%;

    ${media.lg`
      justify-items: center;
      padding: 15px 45px; 
    `}

    ${media.md`
      justify-items: center;
      padding: 15px 45px; 
    `}
  }

  .section-title {
    display: flex;
    border-bottom: 2px solid ${theme.colors.black};
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    text-transform: uppercase;
    width: 100%;
  }

  .section-description {
    padding: 15px 0;
    font-size: 14px;
    font-weight: 500;
    height: 120px;
    line-height: 2;

    ${media.lg`
      height: 60px;
    `}

    ${media.md`
      height: 90px;
    `}
  }

  .section-link {
    align-items: center;
    display: flex;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    border-radius: 5px;
    color: ${theme.colors.black};
    justify-content: center;
    margin-top: 15px;
    padding: 2px 5px ;
    width: 90px;

    &:hover {
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.black};
      border-radius: 3px;
      color: ${theme.colors.black};
      cursor: pointer;
    }
  }
`
