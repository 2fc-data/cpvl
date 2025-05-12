import styled from 'styled-components';
import { media, theme } from "../../styles/theme/theme";

export const HeaderWrap = styled.header`
  align-items: center;
  margin-bottom: 32px;
  width: 100%;

  .head-main {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 16px;
  }

  .head-top {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 2px;

    .head-breadcrumb {
      font-size: 14px;
    }

    .sidebar-open-btn {
      color: ${theme.colors.black};
      cursor: pointer;
      transition: ${theme.transitions.easeInOut};
      display: none;

      &:hover {
        opacity: 0.9;
      }

      ${media.xl`
        display: inline-flex;
        align-items: center;
        justify-content: center;
      `}
    }
  }

  .head-ttl {
    font-size: 32px;
    font-weight: 700;

    ${media.lg`
        font-size: 24px;
    `}
  }

  .head-rtl {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: ${theme.colors.white};
    padding: 10px;
    border-radius: 100vh;
    column-gap: 20px;

    ${media.lg`
        column-gap: 12px;
        justify-content: center;
        width: 100%;
    `}
  }

  .head-search {
    max-width: 214px;
    border-radius: 100vh;
    background: ${theme.colors.white};
    border: 0;
    padding: 0 20px;
    display: flex;
    align-items: stretch;
    column-gap: 10px;
  }

  .head-logo {    
    width: 180px;
    height: 81px;
    border-radius: 3%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      
      ${media.lg`
        width: 60%;
        height: 60%;
      `}
    }

    ${media.md`
      display: none;
    `}
  }
`;
