import axios from "axios";
import {
  MEAL_LIST_FAIL,
  MEAL_LIST_REQUEST,
  MEAL_LIST_SUCCESS,
  MEAL_DETAILS_FAIL,
  MEAL_DETAILS_REQUEST,
  MEAL_DETAILS_SUCCESS,
  MEAL_SEARCH_REQUEST,
  MEAL_SEARCH_SUCCESS,
  MEAL_SEARCH_FAIL,
  MEAL_RANDOM_REQUEST,
  MEAL_RANDOM_SUCCESS,
  MEAL_RANDOM_FAIL,

} from "../constants/mealConstants";

export const listMeal = (id) => async (dispatch) => {
  try {
    dispatch({ type: MEAL_LIST_REQUEST });

    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
    );

    dispatch({ type: MEAL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MEAL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const mealDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: MEAL_DETAILS_REQUEST });
  
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
  
      dispatch({ type: MEAL_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: MEAL_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const mealSearch = (name) => async (dispatch) => {
    try {
      dispatch({ type: MEAL_SEARCH_REQUEST });
  
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
  
      dispatch({ type: MEAL_SEARCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: MEAL_SEARCH_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const randomMeal = () => async (dispatch) => {
    try {
      dispatch({ type: MEAL_RANDOM_REQUEST });
  
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
  
      dispatch({ type: MEAL_RANDOM_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: MEAL_RANDOM_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };