import React, { useState } from 'react';
import axios from 'axios';
import signInCSS from '@/css/login.module.css'

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');

  const newUser = async (e) => {
    e.preventDefault();


    if(password == password2){
      try {
        const response = await axios.post('http://localhost:8000/create-user', {
          name,
          email,
          password,
        });
  
        if (response.status === 201) {
          setMessage('User created successfully!');
        }
      } catch (error) {
        setMessage('Error creating user');
      }
    }else{
      alert('las contraseñas deben coincidir!!!')
    }

  
  };

  return (
    <div className={signInCSS.signIn}>
  
      <form onSubmit={newUser} className={signInCSS.signInForm}>
        <h2 className={signInCSS.field}>Crear cuenta</h2><br />
  
        <div className={signInCSS.field}>
          <label className={signInCSS.label}>Name:</label>
          <input  
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br />
        </div>
  
        <div className={signInCSS.field}>
          <label className={signInCSS.label}>Email:</label>
          <input 
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
        </div>
  
        <div className={signInCSS.field}>
          <label className={signInCSS.label}>Password:</label>
          <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
        </div>

        <div className={signInCSS.field}>
          <label className={signInCSS.label}>Confirmar contraseña</label>
          <input 
            type="password"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          /><br />
        </div>
  
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
  
      {message && <p>{message}</p>}
    </div>
  );
  
};

export default RegisterForm;


/**
 * 
 * 
 * 
        <div className={signInCSS.field}>
          <label className={signInCSS.label}>Repite la contraseña</label>
          <input
            type="password"
            id="password2"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          /> <br />
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
 * 
 * 
 * 
 * 
 */