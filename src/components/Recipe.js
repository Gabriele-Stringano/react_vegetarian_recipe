import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchRecipe } from '../actions/searchAction';
import StyleCSS from './modules/Recipe.module.css';

//DOMPurify sanitizes HTML and prevents XSS attacks
import DOMPurify from 'dompurify';


export function Recipe() {
    const { id } = useParams();

    const recipe = useSelector((state) =>  state.recipes.recipe)
    const dispatch = useDispatch();

    const recipePurifiedHTML = DOMPurify.sanitize(recipe.instructions);

    const IngredientsTable = ({ingredients}) => {
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
      dispatch(fetchRecipe(id));
    }, [id,dispatch])

    return (
      <div className={StyleCSS.Container}>
      <div>
        <h1>{recipe.title}</h1>
        <div className={StyleCSS.divStyle}>Time:{recipe.readyInMinutes}</div>
        <div className={StyleCSS.divStyle}>Serving:{recipe.servings}</div>
        <h1>Instructions</h1>
        <div className={StyleCSS.divStyle} dangerouslySetInnerHTML={{ __html: recipePurifiedHTML }} />
        <h1>Ingredients</h1>
        <IngredientsTable ingredients={recipe.extendedIngredients}/>
      </div>
        <img src={recipe.image} className={StyleCSS.img} alt="Recipe Cover" />
      </div>
    );
  };