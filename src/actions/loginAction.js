
import {
    LOGIN_REQUEST,
    LOGOUT
  } from "../constants/userConstants";
  

export const logOut = () =>{
    return {
        type: LOGOUT,payload:false 
    }
}


export const login = () =>{
    return {
        type: LOGIN_REQUEST,payload:true 
    }
}