import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HeaderCSS from '../modules/Header.module.css';
import logo from './logoGreen.png';
//import action from searchAction as a prop
import { searchRecipes,fetchRecipes, setLoading } from '../../actions/searchAction';
//needed for mapStateToProps function bellow
import { connect } from 'react-redux';

export class Header extends Component{

    //chiamato ad ogni cambiamento nel input text
    onChange = (e) => {
       this.props.searchRecipes(e.target.value);
    }

    onClick = e => {
      this.props.fetchRecipes(this.props.text);
      this.props.setLoading();
    }
               
    render() {
        return(
          <div className= {HeaderCSS.header}>
           <Link to={'/'}><img className= {HeaderCSS.logo} src={logo} alt="homeLogo" width="95" height="88"/></Link>
            <input type= 'text' name='title' className= {HeaderCSS.text} placeholder="Search recipe..." style={{flex:'10', padding: '10px'}}
             //the value will be udated thanks to onChange
            onChange= {this.onChange}/>
            <Link to={'/research'} className= {HeaderCSS.btn} onClick={this.onClick}> Search </Link>
          </div>
        )
    }
}

//connect the component with the Reducer
const mapStateToProps = state => ({
    //search in '/reducers/index how reducer is combined with the recipes attribute
    //in this case recipes: searchReducer so it search infos in searchReducer.js
    text: state.recipes.text
})

export default connect(
  mapStateToProps, 
  { searchRecipes,fetchRecipes,setLoading}
  )(Header);