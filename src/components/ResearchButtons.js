import React from 'react'
import { setOffset,fetchRecipes,setLoading } from '../actions/searchAction';
import {useDispatch, useSelector } from 'react-redux';
import StyleCSS from './modules/ResearchButtons.module.css';

export function ResearchButtons() {

  const text = useSelector((state) =>  state.recipes.text)
  const offset = useSelector((state) =>  state.recipes.offset)
  const dispatch = useDispatch();

  const onClickPrevious = (e) => {
    dispatch(setOffset(offset, 'previous', (newOffset) => {
          dispatch(fetchRecipes(text, newOffset))
          dispatch(setLoading());
          }));
    };

    const onClickNext = (e) =>{
      dispatch(setOffset(offset, 'next', (newOffset) => {
          dispatch(fetchRecipes(text, newOffset))
          dispatch(setLoading());
        }));
    };

 
    return (
        <div className={StyleCSS.box}>
            <button type="button" className={StyleCSS.btnPrevious} onClick={onClickPrevious}>Previous</button>
            <button type="button" className={StyleCSS.btnNext} onClick={onClickNext}>Next</button>
        </div>
    )
};
