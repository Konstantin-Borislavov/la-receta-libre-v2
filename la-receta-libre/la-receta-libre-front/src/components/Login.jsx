import { useState,useEffect } from "react";
import axios from "axios";
import signInCSS from '@/css/login.module.css'






const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  
  const LoginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login-user', {
        email,
        password
      });

    
      const accessToken = response.data.access_token
      setMessage('Logeado con éxito');
      localStorage.setItem('la-receta-libre-token', accessToken);

      window.location.href = '/userPage';

    } catch (error) {
      setMessage('Error iniciando sesión');
    }
  };

  return (
    
      <div className={signInCSS.login}>
          <form onSubmit={LoginUser} className={signInCSS.loginForm}>
          <h2 className={signInCSS.field}>Iniciar sesión</h2><br />

          <div className={signInCSS.field}>
          <label className={signInCSS.label}>Correo electrónico</label>
          <input
            type="text"
            id="login-email"
            onChange={(e) => setEmail(e.target.value)}

          /> <br />
          </div>

          <div className={signInCSS.field}>
          <label className={signInCSS.label}>Contraseña</label>
          <input
            type="password" 
            id="login-password"
            onChange={(e) => setPassword(e.target.value)}
            
          /> <br />
          </div>

          <div className={signInCSS.field}>
            <input type="submit" 
            value="Entrar"
          />
          </div>

          {message && <p className={signInCSS.field} >{message}</p>}
          </form>



    </div>


    


  );
  
};

export default LoginForm;
