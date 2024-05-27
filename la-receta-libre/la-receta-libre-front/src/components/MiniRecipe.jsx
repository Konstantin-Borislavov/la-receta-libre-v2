import MiniRecipeCSS from '@/css/recpie.module.css';



const MiniRecipe = ({ title, author, description }) => {
  return (
    <div className={MiniRecipeCSS.miniRecipe}>
      <h3 className={MiniRecipeCSS.title}>{title}</h3>

      <h4 className={MiniRecipeCSS.description}>Receta de: {description}</h4>
      
        <h4 className={MiniRecipeCSS.author}>Receta de: {author}</h4>
      
    </div>
  );
};

export default MiniRecipe;