import React,{Component} from 'react';

//added react router for more pages
import {BrowserRouter,Routes,Route} from 'react-router-dom';

//import the store
import { Provider } from 'react-redux';
import store from './store'

//import other components e styleDocumets
import Header from './components/layouts/Header.js'
import Home from './components/Home.js';
import Research from './components/Research';
import './App.css';
import Recipe from './components/Recipe';


class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <div className='container'> 
            <Header/>
            <Routes className={'page'}>
              <Route exact path='/' element= {
                <Home/>
              }/>
              <Route path='/research' element= {
                <Research/>
              }/>
              <Route path='/research/:id' element= {
                <Recipe/>
              }/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
