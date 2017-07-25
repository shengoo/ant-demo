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
            state.loggedIn = true;
            state.username = action.username;
            return state;
        case LOGOUT:
            state.loggedIn = false;
            state.username = '';
            return state;
        default:
            return state
    }
};

export default user;