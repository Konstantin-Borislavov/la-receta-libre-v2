import { useState } from "react";
import axios from "axios";
import recepieCSS from "src/css/login.module.css";

export default function prueba(){



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
        <div className={recepieCSS.recepie}>
            
            <h2 className={signInCSS.field}>Iniciar sesión</h2><br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim saepe architecto quo fuga u
              nde minus eligendi ab molestias officia, alias sapiente corporis distinctio! Velit, laboriosam
              quisquam quo eum alias veniam.</p>
            
        </div>
    )
}