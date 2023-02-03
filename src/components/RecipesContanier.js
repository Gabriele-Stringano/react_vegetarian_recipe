import React from 'react'
import { useSelector } from 'react-redux';
import {RecipeCard} from './RecipeCard';

export function RecipesContanier() {

  const recipes = useSelector((state) => state.recipes.recipes);

    let content = '';
    content= recipes.length > 0 ? recipes.map((recipe, index) => <RecipeCard key={index}
    recipe={recipe}/>) : null;
    return (
      <div style={{display: "flex",  justifyContent: 'center',flexWrap: 'wrap'}}> {content} </div>
    )
}