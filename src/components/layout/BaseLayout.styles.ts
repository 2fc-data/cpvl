import styled from "styled-components";
import { media } from "../../styles/theme/theme";

export const BaseLayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-height: 100vh;
  padding-top: 0px;

  .main-content-wrapper {
    flex: 1;
    width: 100%;
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
