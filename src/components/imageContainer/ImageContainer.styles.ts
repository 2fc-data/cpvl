import styled from "styled-components";
import { theme } from "../../styles/theme/theme";

export const ImageContainerWrap = styled.div`
  height: auto;
  width: clamp(6rem, 60rem, 60rem);
`;

export const ImageDescription = styled.div`
  color: ${theme.colors.white};
  font-size: 6rem;
  font-weight: 600;
  margin-top: -9rem;
  text-align: center;
`;

