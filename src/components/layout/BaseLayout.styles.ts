import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";

export const BaseLayoutWrap = styled.div`  
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* min-height: 100vh; */
  color: ${theme.colors.black};

  .main-content-wrapper{    
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 260px;
    padding: 32px 20px;
    width: 100%;    

    ${media.xxl`
      margin-left: 260px;
      padding: 32px 16px;
    `}

    ${media.xl`
      margin-left: 72px;
      padding: 24px 16px;
    `}

    ${media.md`
      margin-left: 0;
    `}
  }
`;
