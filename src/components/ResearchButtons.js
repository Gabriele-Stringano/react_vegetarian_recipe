import React, { Component } from 'react'
import { setOffset,fetchRecipes,setLoading } from '../actions/searchAction';
import { connect } from 'react-redux';
import StyleCSS from './modules/ResearchButtons.module.css';

export class ResearchButtons extends Component {

    onClickPrevious = e => {
        this.props.setOffset(this.props.offset, 'previous', (newOffset) => {
            this.props.fetchRecipes(this.props.text, newOffset)
            this.props.setLoading();
          });
    };

    onClickNext = e =>{
        this.props.setOffset(this.props.offset, 'next', (newOffset) => {
            this.props.fetchRecipes(this.props.text, newOffset)
            this.props.setLoading();
          });
    };

  render() {
    return (
        <div className={StyleCSS.box}>
            <button type="button" className={StyleCSS.btn} onClick={this.onClickPrevious}>Previous</button>
            <button type="button" className={StyleCSS.btn} onClick={this.onClickNext}>Next</button>
        </div>
    )
  }
};

const mapStateToProps = state => ({
    //search in '/reducers/index how reducer is combined with the recipes attribute
    //in this case recipes: searchReducer so it search infos in searchReducer.js
    text: state.recipes.text,
    offset: state.recipes.offset
})

export default connect(mapStateToProps, {setOffset,fetchRecipes,setLoading})(ResearchButtons)
