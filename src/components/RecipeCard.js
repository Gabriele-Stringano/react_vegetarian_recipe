import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import StyleCSS from './modules/RecipeCard.module.css';

export class RecipeCard extends Component {
  render() {
    const {recipe}= this.props;
    return (
        //boostrap
            <div className={StyleCSS.box}>
              <div className={StyleCSS.card}>
                <p className={StyleCSS.p}>
                   {recipe.title}
                </p>
                <img className={StyleCSS.img} src={recipe.image} alt="Recipe Cover" />  
                   <Link className={StyleCSS.link} to={'/research/'+recipe.id }>
                        Recipe Details
                   </Link>
              </div>
            </div>
    )
  }
}

export default RecipeCard