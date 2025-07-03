import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";

export const SectionWrap = styled.div`
  align-items: center;
  background-color: ${theme.colors.primary}; 
  display: flex;
  justify-content: space-around;
  margin: 30px 0px;
  padding: 130px 0px;
  width: 100%;

  ${media.lg`
    display: flex-wrap;
    flex-direction: column;
    padding: 45px 6px;
    text-align: center;
  `}

  ${media.md`
    display: flex-wrap;
    flex-direction: column;
    margin-top: 0px;
    padding: 30px 9px;
    text-align: center;
  `}

  .section-content {
    align-items: center;
    background-color: ${theme.colors.white};  
    border-radius: 6px;
    box-shadow: 3px 3px 9px ${theme.colors.primary};
    display: flex-wrap;
    justify-content: center;
    min-height: 345px;
    margin: 20px auto;
    padding: 20px 25px; 
    text-align: justify;
    width: 300px;
    
    ${media.lg`
      min-height: 145px;
      padding: 15px 12px;
      width: 95%;
    `}

    ${media.md`
      min-height: 145px;
      padding: 15px 12px;
      width: 95%;
    `}
  }

  .section-title {
    display: flex;
    border-bottom: 3px solid ${theme.colors.secondary};
    color: ${theme.colors.primary};
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    text-transform: uppercase;
    padding-bottom: 15px;
  }

  .section-description {
    color: ${theme.colors.text};
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
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.secondary};
    border-radius: 6px;
    color: ${theme.colors.secondary};
    justify-content: center;
    margin-top: 5px;
    padding: 5px 5px ;
    width: 100%;

    &:hover {
      background-color: ${theme.colors.secondary};
      border: 1px solid ${theme.colors.white};
      border-radius: 6px;
      color: ${theme.colors.white};
      cursor: pointer;
    }
  }
`
