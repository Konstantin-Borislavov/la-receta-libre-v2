import { useState } from "react";
import axios from "axios";
import signInCSS from "src/css/login.module.css"

export default function prueba(){

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [errors, setErrors] = useState([]);


  const new_user = async (e) =>{
    e.preventDefault();

   try{
        const url = 'http://127.0.0.1:8000/api/register';
        const body = {
          name,
          username,
          email,
          password,
          password2
        }

        const response = await axios.post(url,body);
        console.log(response);

    }catch (error){
        console.error(error);
    }

}


    return(

        <div className={signInCSS.signIn}>



            <form onSubmit={new_user} className={signInCSS.signInForm}>
            <h2 className={signInCSS.field}>Registrarme</h2><br />

            <div className={signInCSS.field}>
            <label className={signInCSS.label}>Nombre</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            /><br/>
            </div>


            <div className={signInCSS.field}>
            <label className={signInCSS.label}>Nombre de usuario</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            /><br/>
            </div>


            <div className={signInCSS.field}>
              <label className={signInCSS.label}>Correo electrónico</label>
              <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            /> <br />
            </div>



            <div className={signInCSS.field}>
            <label className={signInCSS.label}>Contraseña</label>
            <input
              type="password" 
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            /> <br />
            </div> 

            <div className={signInCSS.field}>

            <label className={signInCSS.label}>Repite la contraseña</label>
            <input
              type="password"
              id="password2"
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
            /> <br />
            </div>

            <div>
              <input type="submit" 
              value="Registrar"
            />
            </div>


            </form>
        </div>
    )
}