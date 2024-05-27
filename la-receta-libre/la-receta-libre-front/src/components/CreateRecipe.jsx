import React, { useState } from 'react';
import axios from 'axios';
import CreateRecipeCSS from '@/css/recpie.module.css';

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [recipe, setRecipe] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [message, setMessage] = useState('');

  const newRecipe = async (e) => {
    e.preventDefault();
  
    const accessToken = localStorage.getItem('la-receta-libre-token');
    alert(accessToken);
  
    const bodyParameters = {
      title,
      description,
      recipe,
      ingredients,
      created_at: new Date().toISOString(),
      author: 'String'
    };
  
    console.log(bodyParameters);
  
    try {
      const response = await fetch(`http://localhost:8000/create-recipe/${accessToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyParameters),
        //credentials: 'include'
      });
  
      if (response.status === 201) {
        setMessage('Recipe created successfully!');
      } else {
        setMessage('Error creating recipe');
      }
    } catch (error) {
      setMessage('Error creating recipe');
    }
  };

  const addIngredient = () => {
    if (ingredient) {
      setIngredients([...ingredients, ingredient]);
      setIngredient('');
    }
  };

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  return (
    <div>
      <form onSubmit={newRecipe} className={CreateRecipeCSS.CreateRecipeForm}>
        <h2 className={CreateRecipeCSS.field}>Crear receta</h2><br />

        <div className={CreateRecipeCSS.field}>
          <label className={CreateRecipeCSS.label}>Título de la receta</label>
          <input  
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          /><br />
        </div>

        <div className={CreateRecipeCSS.field}>
          <label className={CreateRecipeCSS.label}>Descripción</label>
          <textarea
            className={CreateRecipeCSS.textarea}
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          /><br />
        </div>

        <div className={CreateRecipeCSS.field}>
          <label className={CreateRecipeCSS.label}>Ingredientes</label>
          <input 
            type="text"
            id="ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <button type="button" onClick={addIngredient}>Agregar Ingrediente</button>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                {item} 
                <button type="button" onClick={() => removeIngredient(index)}>Eliminar</button>
              </li>
            ))}
          </ul><br />
        </div>

        <div className={CreateRecipeCSS.field}>
          <label className={CreateRecipeCSS.label}>Receta</label>
          <textarea
            className={CreateRecipeCSS.textarea}
            id="recipe"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
            required
          /><br />
        </div>

        <div>
          <button type="submit">Registrar</button>
        </div>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateRecipe;
