import { useActionState } from 'react';
import { Link } from 'react-router-dom';

// import { API, getURI } from '../../services';
// import { useLocalStorage } from 'usehooks-ts';

import { LoginWrap } from './Login.styles';
import {
  isNotEmpty,
  hasMinLength
} from '../../util/validation';

function loginAction(_prevFormState: unknown, formData: FormData) {
  const username = formData.get('username');
  const password = formData.get('password');
  const errors: string[] = [];

  if (username !== null &&
    (!isNotEmpty(username.toString()) || !hasMinLength(username.toString(), 3))) {
    errors.push("Usuário: É o nome antes do '@' do seu e-mail");
  }
  if (password !== null &&
    (!isNotEmpty(password.toString()) || !hasMinLength(password.toString(), 6))) {
    errors.push("Senha: Deve ter no mínimo 6 characteres");
  }
  if (username === null && password === null) {
    errors.push("Digite seu Usuário e Senha.");
  }
  if (errors.length > 0) {
    return {
      errors,
      enteredValues: {
        username,
        password
      }
    };
  }
  return { errors: null };
}


export const Login = () => {
  const [formState, formAction] = useActionState(loginAction, {
    errors: null
  });

  return (
    <form action={formAction}>
      <LoginWrap>

        <div className="login-form-container">
          <div className="login-title">Login</div>

          <div className="form-group">
            <label>Usuário:</label>
            <input
              autoComplete='username'
              defaultValue={formState.enteredValues?.username?.toString()}
              id="username"
              name="username"
              placeholder="Nome antes do '@' do seu e-mail"
              type="text"
            />
          </div>

          <div className="form-group">
            <label>Senha:</label>
            <input
              autoComplete='current-password'
              defaultValue={formState.enteredValues?.password?.toString()}
              id="password"
              name="password"
              placeholder="Mínimo 6 caracteres"
              type="password"
            />
          </div>

          <div className="redirect-rescue-password">
            <br />
            <h4>Esqueceu a senha? </h4>
            <Link to="/rescuePassword"><h4><u>Clique aqui</u></h4></Link>
          </div>

          <div className="form-group">
            <br />
            <button type="reset" className="button">Limpar</button>
            <button className="button">Entrar</button>
          </div>

          {formState.errors && <ul className="error">
            {formState.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>}

          <div className="redirect-login">
            <br />
            <h4>Não tem conta? </h4>
            <Link to="/signup"><h4><u>Cadastre-se</u></h4></Link>
          </div>
        </div>
      </LoginWrap >
    </form>
  );
}