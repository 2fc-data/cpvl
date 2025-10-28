import styled from 'styled-components';

export const MainNav = styled('div')`
  text-align: center;
  position: absolute;
  width: 100vw;

  .inner-wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 1200px;
    padding: 39px 53px;

    @media (max-width: 768px) {
      padding: 30px;
    }

    svg {
      min-width: 285px;
      width: 285px;

      @media (max-width: 768px) {
        min-width: 168px;
        width: 168px;
      }
    }
  }

  .desktop-menu {
    Link,
    button {
      background-color: transparent;
      border: none;
      box-sizing: border-box;
      color: var(--alternativeBlue);
      cursor: pointer;
      font-size: 14px;
      margin-right: 20px;
      text-decoration: none;
      text-transform: uppercase;

      &:last-child {
        margin-right: 0;
      }

      &.button {
        border: 1px solid var(--green);
        padding: 8px 13px;
        transition: 0.3s all ease-in-out;

        &:hover {
          background-color: var(--green);
          color: var(--white);
        }
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .menu-icon {
    display: none;

    @media (max-width: 768px) {
      color: 768px;
      border: 1px solid #333;
      border-radius: 3px;
      display: block;
      height: 35px;
      padding: 5px;
      position: absolute;
      right: 30px;
      top: 30px;
      width: 35px;
      z-index: 10;
    }
  }
`;
