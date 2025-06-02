import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";

export const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  ${media.lg`
    margin: 0px auto;
  `}
  
  ${media.md`
    margin: 0px auto;
  `}

  .login-form-container {
    border: 1px solid ${theme.colors.black};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin: 90px auto;
    width: 54%;
    padding: 50px 70px;

    ${media.lg`
      margin: 45px auto;
      width: 78%;
    `}
  
    ${media.md`
      margin: 30px auto;
      width: 87%;
    `}
  }

  .login-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      font-size: 16px;
    }

    input[type='text'],
    input[type='password'] {
      padding: 10px;
      border: 1px solid ${theme.colors.black};
      border-radius: 6px;
      font-size: 16px;
    }

    input[type='checkbox'] {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    span {
      color: ${theme.colors.lightGreen};
      font-size: 12px;
    }
  }
  
  .error {
    border-top: 3px solid ${theme.colors.lightGray};
    margin-top: 10px;
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.lightGray};
  }

  .error ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .error li {
    line-height: 2;
    list-style: square;
    margin-left: 20px;
    padding: 5px;
  }

  .button {
    padding: 10px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    color: ${theme.colors.lightBlack};
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
    }
  }
`;
