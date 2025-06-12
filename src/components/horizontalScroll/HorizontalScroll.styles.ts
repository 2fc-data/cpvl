import styled from "styled-components";
import { theme } from "../../styles/theme/theme";

export const HorizontalScrollWrap = styled.div`
  /* height: 100%; */
  margin-top: 25px;
`;

export const ContentContainer = styled.div`
  align-items: center;
  background-color: ${theme.colors.whiteLight};
  display: flex;
  justify-content: flex-start;
  height: 100%;
  overflow: hidden;
  position: sticky;
`;

export const Images = styled.div`
  display: flex;
  gap: 9rem;
`;


