import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setToken } from '../../redux/slices/authSlice';
// import axios from 'axios';

import { LoginWrap } from './Login.styles';

export const Login = () => {
  // const dispatch = useDispatch();
  // const form = useFormActions({
  //   initialValues: { email: '', password: '' },
  //   onSubmit: async (values) => {
  //     const res = await axios.post('http://localhost:3000/auth/login', values);
  //     dispatch(setToken(res.data.token));
  //   },
  // });

  return (
    <LoginWrap>
      <div className="login-form-container">
        <div className="login-title">Login</div>

        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="text"
            placeholder="Seu e-mail"
            // {...register('email', { required: true })}
          />
          {/* {errors?.email && <span>E-mail é obrigatório</span>} */}
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            placeholder="Mínimo 6 caracteres"
            // {...register('password', { required: true, minLength: 6 })}
          />
          {/* {errors?.password && <span>Senha é obrigatória</span>} */}
        </div>

        <div className="form-group">
          {/* <button onClick={() => handleSubmit(onSubmit)()}>Entrar</button> */}
          <button type="submit">Entrar</button>
        </div>


        <div className="redirect-register">
          <p>Não tem conta? </p>
          <Link to="/register"><u>Clique aqui</u></Link>
        </div>
      </div>
    </LoginWrap>
  );
}