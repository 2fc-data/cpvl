import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";


export const SectionWrap = styled.div`
  align-items: center;
  background-color: ${theme.colors.white};  
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
  padding: 130px 10px;
  text-align: justify;
  width: 100%;

  ${media.lg`
    display: flex-wrap;
    flex-direction: column;
    margin: 15px;
    padding: 15px 12px;
    text-align: justify;
  `}

  ${media.md`
    display: flex-wrap;
    flex-direction: column;
    margin: 15px;
    padding: 10px 9px;
    text-align: justify;
  `}

  .section-content {
    align-items: center;    
    border-radius: 6px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
    display: flex-wrap;
    flex-direction: column;
    min-height: 300px;
    margin: 20px 30px;
    padding: 20px 30px; 
    width: 400px;

    /* ${media.lg`
      justify-items: center;
      padding: 15px 45px; 
    `}

    ${media.md`
      justify-items: center;
      padding: 15px 45px; 
    `} */
  }

  .section-title {
    display: flex;
    border-bottom: 3px solid ${theme.colors.lightGreen};
    color: ${theme.colors.lightGreen};
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    text-transform: uppercase;
    padding-bottom: 15px;
  }

  .section-description {
    padding: 15px 0;
    font-size: 14px;
    font-weight: 500;
    height: auto;
    min-height: 120px;
    line-height: 2;

    ${media.lg`
      height: auto;
    `}

    ${media.md`
      height: auto;
    `}
  }

  .section-link {
    align-items: center;
    bottom: 0;
    display: flex;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.lightGreen};
    border-radius: 6px;
    color: ${theme.colors.lightGreen};
    justify-content: center;
    margin-top: 15px;
    padding: 10px 5px ;
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
