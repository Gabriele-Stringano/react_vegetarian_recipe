import React from 'react'
import { Link } from 'react-router-dom';
import HeaderCSS from '../modules/Header.module.css';
import logo from './logoGreen.png';
//import action from searchAction as a prop
import { searchRecipes,fetchRecipes,setOffset, setLoading } from '../../actions/searchAction';
//needed for mapStateToProps function bellow
import { useSelector, useDispatch } from 'react-redux'


export function Header () {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.recipes.text);
  const offset = useSelector((state) => state.recipes.offset);
  const loading = useSelector((state) =>  state.recipes.loading)

  const onChange = (e) => {
    dispatch(searchRecipes((e.target.value)));
  };

  const onClick = (e) => {
    dispatch(setOffset(offset, 'start', (newOffset) => {
      dispatch(fetchRecipes(text, newOffset));
      dispatch(setLoading());
    }));
  };

  return(
    <div className={HeaderCSS.header}>
      <Link to={'/'}><img className={HeaderCSS.logo} src={logo} alt="homeLogo" width="95" height="88"/></Link>
      <input type='text' name='title' className={HeaderCSS.text} placeholder="Search recipe..." style={{flex:'10', padding: '10px'}} onChange={onChange} disabled={loading}/>
      {!loading ? (
      <Link to={'/research'} className={HeaderCSS.btn} onClick={onClick} disabled={loading}> Search </Link>
      ) : null}
    </div>
  );
}
