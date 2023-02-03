import React from 'react'
import Spinner from './layouts/Spinner';
import {RecipesContanier} from './RecipesContanier';
import {ResearchButtons} from './ResearchButtons';
import StyleCSS from './modules/Research.module.css';
import { useSelector} from 'react-redux'

export function Research () {

  const loading = useSelector((state) =>  state.recipes.loading)

  return (
    <div className={StyleCSS.box}>
      {loading ? <Spinner/> : <RecipesContanier/>}
      {loading ? null : <ResearchButtons/>}
    </div>
  )
}