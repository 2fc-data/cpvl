import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";

export const BaseLayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  /* background-color: ${theme.colors.background}; */
  padding-top: 80px;

  .main-content-wrapper {
    flex: 1;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    padding: 0rem;

    ${media.lg`      
      padding: 0rem;
    `}

    ${media.md`      
      padding: 0rem;
    `}
  }
`;