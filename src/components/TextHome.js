import React from 'react';
import { Link } from 'react-router-dom';
import StyleCSS from './modules/TextHome.module.css';

function TextHome() {
  return (
    <div className= {StyleCSS.box}>
      <h1 className= {StyleCSS.title}>VEGETARIAN RECIPES</h1>
      <p className={StyleCSS.text}>
        Healthy<br/> 
        Green<br/>
        Fun</p>
      <Link className={StyleCSS.btn} to={'/research'}>Start your journey</Link>
    </div>
  );
}

export default TextHome;