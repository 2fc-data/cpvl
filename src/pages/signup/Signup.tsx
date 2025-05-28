import { useActionState } from "react";
import { SignupWrap } from "./Signup.styles";
import {
  isEmail,
  isNotEmpty,
  isEqualToOtherValue,
  hasMinLength
} from '../../util/validation';

export const Signup = () => {

  function signupAction(prevFormState: unknown, formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const agreeStatute = formData.get('agreeStatute');
    const agreeRegimentoInterno = formData.get('agreeRegimentoInterno');

    const errors: string[] = [];

    if (name !== null &&
      (!isNotEmpty(name.toString()) || !hasMinLength(name.toString(), 10))) {
      errors.push("Nome completo, deve deve ter no mínimo 10 caracteres");
    }

    if (email !== null &&
      (!isNotEmpty(email.toString()) || !isEmail(email.toString()))) {
      errors.push("Digite um E-mail válido");
    }

    if (password !== null &&
      (!isNotEmpty(password.toString()) || !hasMinLength(password.toString(), 6))) {
      errors.push("Senha deve ter no mínimo 6 characteres");
    }

    if (password !== null && confirmPassword !== null &&
      (!isEqualToOtherValue(password.toString(), confirmPassword.toString()))) {
      errors.push("Senha e Confirmação da Senha devem coincidir");
    }

    if (!agreeStatute) {
      errors.push("Confirme o entendimento do Estatuto CPVL");
    }

    if (!agreeRegimentoInterno) {
      errors.push("Confirme o entendimento do Regimento Interno CPVL");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          name,
          email,
          password,
          confirmPassword,
          agreeStatute,
          agreeRegimentoInterno
        }
      };
    }

    return { errors: null };
  }

  const [formState, formAction] = useActionState(signupAction, {
    errors: null
  });

  return (
    <form action={formAction}>
      <SignupWrap>
        <div className="signup-form-container">
          <div className="signup-title">Cadastre-se</div>

          <div className="form-group">
            <label htmlFor="name">Nome completo:</label>
            <input
              defaultValue={formState.enteredValues?.name}
              id="name"
              name="name"
              placeholder="Nome completo"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              autoComplete="username"
              defaultValue={formState.enteredValues?.email}
              id="email"
              name="email"
              placeholder="E-mail válido"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              autoComplete="new-password"
              defaultValue={formState.enteredValues?.password}
              id="password"
              name="password"
              placeholder="Mínimo 6 caracteres"
              type="password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmpassword">Confirme a senha:</label>
            <input
              autoComplete="confirm-new-password"
              defaultValue={formState.enteredValues?.confirmPassword}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirme a senha"
              type="password"
            />
            <br />
          </div>

          <div className="form-group">
            <input
              defaultChecked={formState.enteredValues?.agreeStatute}
              id="agreeStatute"
              name="agreeStatute"
              type="checkbox"
            />
            <label htmlFor="agreeStatute">Li e concordo com o ESTATUTO CPVL.</label>
          </div>

          <div className="form-group">
            <input
              defaultChecked={formState.enteredValues?.agreeRegimentoInterno}
              id="agreeRegimentoInterno"
              name="agreeRegimentoInterno"
              type="checkbox"
            />
            <label htmlFor="agreeRegimentoInterno">Li e concordo com o REGIMENTO INTERNO CPVL.</label>
          </div>

          {formState.errors && <ul className="error">
            {formState.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>}

          <div className="form-group">
            <br />
            <button type="reset" className="button button-clean">Limpar</button>
            <button className="button">Cadastrar</button>            
          </div>
        </div>
      </SignupWrap>
    </form>
  );
};
