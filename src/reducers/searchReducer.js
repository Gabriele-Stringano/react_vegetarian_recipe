import {FETCH_FOODS, SEARCH_FOOD, FETCH_FOOD, LOADING} from '../actions/types'

const initialState = {
    //Text in the text-input element
    text: '',
    //json data obtained
    recipes: [],
    //state, change when request is sent and returned
    loading: false,
    //information about the single recipe
    recipe: []
}

export default function searchReducer(state = initialState, action){
    switch (action.type){
        case SEARCH_FOOD:
            return{
                ...state,
                text: action.payload,
                loading: false
            }
        case FETCH_FOODS:
            return{
                ...state,
                recipes: action.payload,
                loading: false
        }
        case FETCH_FOOD:
            return{
                ...state,
                recipe: action.payload,
                loading: false
        }
        case LOADING:
            return{
                ...state,
                loading: true,
        }
        default:
            return state
    }
}