import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchRecipe } from '../actions/searchAction';
import StyleCSS from './modules/Recipe.module.css';

export function Recipe({fetchRecipe, recipe}) {
    const { id } = useParams();

    function IngredientsTable(ingredients) {
      if (!ingredients) {
        return <div></div>;
      }
      return (
        <table className={StyleCSS.responsiveTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient, index) => (
                <tr key={index}>
                <td>{ingredient.name}</td>
                <td>{ingredient.amount}</td>
                <td>{ingredient.unit}</td>
                </tr>
            ))}
          </tbody>
        </table>
      );
    }
    

    useEffect(() => {
      fetchRecipe(id);
    }, [id,fetchRecipe])

    return (
      <div className={StyleCSS.Container}>
      <div>
        <h1>{recipe.title}</h1>
        <div className={StyleCSS.divStyle}>Time:{recipe.readyInMinutes}</div>
        <div className={StyleCSS.divStyle}>Serving:{recipe.servings}</div>
        <h1>Ingredients</h1>
        <div>{IngredientsTable(recipe.extendedIngredients)}</div>
      </div>
        <img src={recipe.image} className={StyleCSS.img} alt="Recipe Cover" />
      </div>
    );
  };

const mapStateProps = state =>({
    loading: state.recipes.loading,
    recipe: state.recipes.recipe
});

export default connect(mapStateProps, {fetchRecipe})(Recipe);
