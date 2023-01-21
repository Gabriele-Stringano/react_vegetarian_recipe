import React, { Component } from 'react';
import TextHome from './TextHome';
//imported style
import StyleCSS from './modules/Home.module.css';

class Home extends Component {
  render() {
    return(
        <div className= {StyleCSS.box}>
            <TextHome/>
        </div>
    )
  }
}

export default Home;