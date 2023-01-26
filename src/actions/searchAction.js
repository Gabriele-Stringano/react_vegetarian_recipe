import { SEARCH_FOOD, SET_OFFSET, FETCH_FOODS, FETCH_FOOD, LOADING } from "./types";
import axios from "axios";
 
//text within the text input
export const searchRecipes = text => dispatch => {
    dispatch({
        type: SEARCH_FOOD,
        payload: text
    });
};

export const setOffset = (offset,direction,callback ) => dispatch =>{
    switch (direction){
        case 'start':
            offset= 0;
            break;
        case 'next':
            offset= offset + 9;
            break;
        case 'previous':
            if (offset > 0){
                offset = offset - 9;
            }
            else{
                offset=0; //useful to avoid bugs
            }
            break;
        default:
            console.log('error, value passed to setOffset function is not present in the switch')
        }
        dispatch({
            type: SET_OFFSET,
            payload: offset
        });
        if (callback) {
            callback(offset);
        }
    };

//search for the list of recipes
export const fetchRecipes = (text,offset) => dispatch => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&query=${text}&diet=vegetarian&number=9&offset=${offset}`)
        .then(response => dispatch({
            type:FETCH_FOODS,
            payload: response.data.results
        }))
        .catch(err => console.log(err))
}

//searching for recipe information
export const fetchRecipe = id => dispatch => {
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