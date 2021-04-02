import {
    MEAL_DETAILS_FAIL,
    MEAL_DETAILS_REQUEST,
    MEAL_DETAILS_SUCCESS,
    MEAL_LIST_FAIL,
    MEAL_LIST_REQUEST,
    MEAL_LIST_SUCCESS,
    MEAL_RANDOM_FAIL,
    MEAL_RANDOM_REQUEST,
    MEAL_RANDOM_SUCCESS,
    MEAL_SEARCH_FAIL,
    MEAL_SEARCH_REQUEST,
    MEAL_SEARCH_SUCCESS,
  } from "../constants/mealConstants";
  
  export const mealListReducer = (state = {meals:[]}, action) => {
    switch (action.type) {
      case MEAL_LIST_REQUEST:
        return { loading: true, ...state };
      case MEAL_LIST_SUCCESS:
        return { loading: false, meals: action.payload };
      case MEAL_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const singleMealReducer = (state = {}, action) => {
    switch (action.type) {
      case MEAL_DETAILS_REQUEST:
        return { loading: true, ...state };
      case MEAL_DETAILS_SUCCESS:
        return { loading: false, meals: action.payload };
      case MEAL_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const mealSearchReducer = (state = {meals:[]}, action) => {
    switch (action.type) {
      case MEAL_SEARCH_REQUEST:
        return { loading: true, ...state };
      case MEAL_SEARCH_SUCCESS:
        return { loading: false, meals: action.payload };
      case MEAL_SEARCH_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const randomMealReducer = (state = {meals:[]}, action) => {
    switch (action.type) {
      case MEAL_RANDOM_REQUEST:
        return { loading: true, ...state };
      case MEAL_RANDOM_SUCCESS:
        return { loading: false, meals: action.payload };
      case MEAL_RANDOM_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };