import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";


export const SectionWrap = styled.div`
  align-items: center;
  /* background-color: ${theme.colors.skyBlue};   */
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
  padding: 130px 0px;
  width: 100%;

  ${media.lg`
    display: flex-wrap;
    flex-direction: column;
    padding: 10px 9px;
    text-align: center;
  `}

  ${media.md`
    display: flex-wrap;
    flex-direction: column;
    margin-top: 0px;
    padding: 10px 9px;
    text-align: center;
  `}

  .section-content {
    align-items: center;
    background-color: ${theme.colors.skyBlueDark};  
    border-radius: 6px;
    box-shadow: 3px 3px 6px rgba(61, 79, 100, 0.6);
    display: flex-wrap;
    justify-content: center;
    min-height: 345px;
    margin: 20px 0px;
    padding: 20px 25px; 
    text-align: justify;
    width: 270px;
    
    ${media.lg`
      min-height: 145px;
      padding: 15px 12px;
      width: 95%;
    `}
  }

  .section-title {
    display: flex;
    border-bottom: 3px solid ${theme.colors.white};
    color: ${theme.colors.white};
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    text-transform: uppercase;
    padding-bottom: 15px;
  }

  .section-description {
    color: ${theme.colors.white};
    padding: 15px 0;
    font-size: 14px;
    font-weight: 500;
    min-height: 270px;
    line-height: 2;

    ${media.lg`
      min-height: 90px;
    `}

    ${media.md`
      min-height: 90px;
    `}
  }

  .section-link {
    align-items: center;
    bottom: 0;
    display: flex;
    background-color: ${theme.colors.skyBlueDark};
    border: 1px solid ${theme.colors.white};
    border-radius: 6px;
    color: ${theme.colors.white};
    justify-content: center;
    margin-top: 15px;
    padding: 10px 5px ;
    width: 90px;

    &:hover {
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      border-radius: 6px;
      color: ${theme.colors.skyBlueDark};
      cursor: pointer;
    }
  }
`
