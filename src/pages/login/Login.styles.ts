import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";

export const LoginWrap = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 6px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: ${theme.colors.black};
  margin: 111px auto;
  max-width: 600px;
  padding: 20px;
  width: 100%;

  ${media.lg`
    margin: 90px auto;
  `}
  
  ${media.md`
    margin: 60px auto;
  `}

  .login-form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
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
      color: ${theme.colors.black};
      font-size: 12px;
    }
  }

  button {
    padding: 10px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    color: ${theme.colors.black};
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
    }
  }
`;
