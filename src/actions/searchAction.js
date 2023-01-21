import { SEARCH_FOOD, FETCH_FOODS, FETCH_FOOD, LOADING } from "./types";
import axios from "axios";
 

export const searchRecipes = text => dispatch => {
    dispatch({
        type: SEARCH_FOOD,
        payload: text
    });
};

export const fetchRecipes = text => dispatch => {
    console.log(process.env)
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&query=${text}&diet=vegetarian&number=9`)
        .then(response => dispatch({
            type:FETCH_FOODS,
            payload: response.data.results
        }))
        .catch(err => console.log(err))
}

export const fetchRecipe = id => dispatch => {
    console.log('fetching recipe with id:', id);
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&includeNutrition=false`)
    .then(response => dispatch({
        type:FETCH_FOOD,
        payload: response.data
    }))
    .catch(err => console.log(err))
}

export const setLoading = () => {
    return{
        type:LOADING
    };
};