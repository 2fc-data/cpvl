import styled from "styled-components";
import { theme } from "../../styles/theme/theme";

export const RegisterWrap = styled.div`
  background-color: ${theme.colors.skyBlueDark};
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  width: 100%;
  
  .register-form-container {
    border: 1px solid ${theme.colors.white};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin: 90px auto;
    width: 75%;
    padding: 20px;
  }

  .register-title {
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
