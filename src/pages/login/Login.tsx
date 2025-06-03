import { useActionState } from 'react';

import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setToken } from '../../redux/slices/authSlice';
// import axios from 'axios';

import { LoginWrap } from './Login.styles';
import {
  isEmail,
  isNotEmpty,
  isEqualToOtherValue,
  hasMinLength
} from '../../util/validation';

function loginAction(prevFormState: unknown, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  const errors: string[] = [];

  if (email !== null &&
    (!isNotEmpty(email.toString()) || !isEmail(email.toString()))) {
    errors.push("Digite um E-mail válido");
  }

  if (password !== null &&
    (!isNotEmpty(password.toString()) || !hasMinLength(password.toString(), 6))) {
    errors.push("Senha deve ter no mínimo 6 characteres");
  }

  if (email === null && password === null) {
    errors.push("Digite se E-mail e Senha.");
  }

  if (errors.length > 0) {
    return {
      errors,
      enteredValues: {
        email,
        password
      }
    };
  }

  return { errors: null };
}


export const Login = () => {
  // const dispatch = useDispatch();
  // const form = useFormActions({
  //   initialValues: { email: '', password: '' },
  //   onSubmit: async (values) => {
  //     const res = await axios.post('http://localhost:3000/auth/login', values);
  //     dispatch(setToken(res.data.token));
  //   },
  // });

  const [formState, formAction] = useActionState(loginAction, {
    errors: null
  });

  return (
    <form action={formAction}>
      <LoginWrap>

        <div className="login-form-container">
          <div className="login-title">Login</div>

          <div className="form-group">
            <label>E-mail:</label>
            <input
              autoComplete='username'
              defaultValue={formState.enteredValues?.email?.toString()}
              id="email"
              name="email"
              placeholder="Seu e-mail"
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