import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";


export const SectionWrap = styled.div`
  background-color: ${theme.colors.skyBlueDark};
  display: flex;
  justify-content: space-between;
  margin: 0px 0;
  padding: 0px 0px;

  ${media.xl`
    margin: 45px 0;
    padding: 10px 0;
  `}

  ${media.lg`
    flex-direction: column;
    margin: 30px 0;
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
    margin: 15px 0px;
    padding: 15px 30px; 
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
    border-bottom: 3px solid ${theme.colors.lightGreen};
    color: ${theme.colors.lightGreen};
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    text-transform: uppercase;
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
    border: 1px solid ${theme.colors.lightGreen};
    border-radius: 6px;
    color: ${theme.colors.lightGreen};
    justify-content: center;
    margin-top: 15px;
    padding: 2px 5px ;
    width: 90px;

    &:hover {
      background-color: ${theme.colors.lightGreen};
      border: 1px solid ${theme.colors.lightGreen};
      border-radius: 6px;
      color: ${theme.colors.white};
      cursor: pointer;
    }
  }
`
