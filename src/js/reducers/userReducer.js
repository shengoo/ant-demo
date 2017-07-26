import { LOGIN, LOGOUT } from '../actions';

const initialState = {
    // some fields...,
    username: '',
    loggedIn: false,
    shouldRedirect: false,
    errorMessage: null
};

const user = (state = initialState, action) =>{
    switch (action.type){
        case LOGIN:
            return {
                ...state,
                loggedIn: true,
                username :action.username
            };
        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
                username :''
            };;
        default:
            return state
    }
};

export default user;