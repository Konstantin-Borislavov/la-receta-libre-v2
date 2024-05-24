import { useState } from "react";
import axios from "axios";
import signInCSS from '@/css/login.module.css'

export default function prueba(){

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const [errors, setErrors] = useState([]);


  const login_user = async (e) =>{
    e.preventDefault();

   try{
        const url = 'http://127.0.0.1:8000/get-user';
        const body = {
          email,
          password,
        }

        const response = await axios.post(url,body);
        console.log(response);

    }catch (error){
        console.error(error);
    }

}


    return(
        <div className={signInCSS.login}>
            <form onSubmit={login_user} className={signInCSS.loginForm}>
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
  

            </form>
        </div>
    )
}