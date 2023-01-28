import React from 'react';
import StyleCSS from './modules/TextHome.module.css';
import imageHome from "../images/homeImage.jpg";

function TextHome() {
  return (
    <div className= {StyleCSS.box}>
      <h1 className= {StyleCSS.title}>VEGETARIAN RECIPES</h1>
      <p className={StyleCSS.text}>
        Healthy<br/> 
        Green<br/>
        Fun</p>
        <img src={imageHome} className= {StyleCSS.image} alt="VegFoto"/>
    </div>
  );
}

export default TextHome;