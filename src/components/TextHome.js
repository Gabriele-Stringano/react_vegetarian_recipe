import React from 'react';
import { Link } from 'react-router-dom';
import StyleCSS from './modules/TextHome.module.css';

function TextHome() {
  return (
    <div className= {StyleCSS.box}>
      <h1 className= {StyleCSS.title}>VEGETARIAN RECIPES</h1>
      <p className={StyleCSS.text}>
        Eating a vegan diet can be very healthy because it is typically high in fiber,
         vitamins and minerals.<br/> 
         A vegan diet can also help with weight 
         management, lower the risk of heart disease and certain types of cancer<br/>
         Additionally, a vegan diet helps to decrease greenhouse gas 
         emissions and preserve natural resources.<br/>
         Overall, a well-planned vegan diet can 
         provide all the necessary nutrients for a healthy lifestyle.</p>
      <Link className={StyleCSS.btn} to={'/research'}>Start your journey</Link>
    </div>
  );
}

export default TextHome;