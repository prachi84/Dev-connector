import { GET_ERRORS, SET_USER } from './types'
import axios from 'axios';

//Register user
export const registerUser = (userData) => {
    return{
     type:SET_USER,
     payload:userData
    }
     
  }