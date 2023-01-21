import React, { Component } from 'react'
import { connect } from 'react-redux';
import Spinner from './layouts/Spinner';
import RecipesContanier from './RecipesContanier';
import StyleCSS from './modules/Research.module.css';

export class Research extends Component {
  render() {
    const {loading}= this.props;
    return (
      <div className={StyleCSS.box}>
        {loading ? <Spinner/> : <RecipesContanier/>}
      </div>
    )
  }
}

const MapStateToProps = state =>({
    loading: state.recipes.loading
});

export default connect(
    MapStateToProps,
    {}
)(Research);