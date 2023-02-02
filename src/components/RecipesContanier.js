import React, { Component } from 'react'
import { connect } from 'react-redux';
import {RecipeCard} from './RecipeCard';

export class RecipesContanier extends Component {
  render() {
    const {recipes}= this.props;
    let content = '';
    content= recipes.length > 0 ? recipes.map((recipe, index) => <RecipeCard key={index}
    recipe={recipe}/>) : null;
    return (
      <div style={{display: "flex",  justifyContent: 'center',flexWrap: 'wrap'}}> {content} </div>
    )
  }
}

const MapStateToProps = state =>({
    recipes: state.recipes.recipes
});

export default connect(
    MapStateToProps,
    {}
)(RecipesContanier);
