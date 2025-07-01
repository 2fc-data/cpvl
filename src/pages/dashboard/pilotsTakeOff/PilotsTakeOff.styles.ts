import { styled } from "styled-components";
import { theme } from "../../../styles/theme/theme";

export const PilotsTakeOffWrap = styled.div`
  border: 1px solid ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin: 0rem 1.5rem;
`;

export const PilotsTakeOffContent = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid ${theme.colors.primary};
  font-size: 12px;    
  margin: 2rem 1.5rem; 
  padding: 2rem;   
  text-align: left;
`;

