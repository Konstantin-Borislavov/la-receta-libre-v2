import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MiniRecipe from './MiniRecipe';
import recipeCSS from '@/css/recpie.module.css'


const homePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-all-recipes'); // Ruta de tu endpoint
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    

    recipes.map(recipe => (
      
      <MiniRecipe key={recipe.id} title={recipe.title} author={recipe.author} description={recipe.description} />
      

    ))


  );
};

export default homePage;










