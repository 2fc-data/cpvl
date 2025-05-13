import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";

export const BaseLayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-color: ${theme.colors.background};
  padding-top: 80px; // Space for fixed header

  .main-content-wrapper {
    flex: 1;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;

    ${media.lg`
      padding: 1.5rem;
    `}

    ${media.md`
      padding: 1rem;
    `}
  }
`;