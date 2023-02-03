import React from 'react'
import { Link } from 'react-router-dom';
import StyleCSS from './modules/RecipeCard.module.css';

export function RecipeCard (props) {
  const {recipe}= props;
    return (
        //boostrap
            <div className={StyleCSS.box}>
              <div className={StyleCSS.card}>
                <p className={StyleCSS.p}>
                   {recipe.title}
                </p>
                <Link to={'/research/'+recipe.id }>
                <img className={StyleCSS.img} src={recipe.image} alt="Recipe Cover" />
                </Link>
                   <Link className={StyleCSS.link} to={'/research/'+recipe.id }>
                        Recipe Details
                   </Link>
              </div>
            </div>
    )
}