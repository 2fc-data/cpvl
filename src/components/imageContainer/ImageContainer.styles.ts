import styled from "styled-components";
import { theme } from "../../styles/theme/theme";

export const ImageContainerWrap = styled.div`
  background-color: ${theme.colors.secondary}; 
  height: clamp(4rem, 50rem, 20rem);
  padding: 0.6rem;
  width: clamp(6rem, 50rem, 20rem);
`;


export const ImageDescription = styled.div`
  color: ${theme.colors.white};
  font-size: 6rem;
  font-weight: 600;
  margin-top: -9rem;
  text-align: center;
`;
