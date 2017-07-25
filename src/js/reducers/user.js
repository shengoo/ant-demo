import { LOGIN, LOGOUT } from '../actions';

const initialState = {
    // some fields...,
    username: '',
    loggedIn: false,
    shouldRedirect: false,
    errorMessage: null
};

const user = (state = initialState, action) =>{
    console.log(action)
    switch (action.type){
        case LOGIN:
            state.loggedIn = true;
            state.username = action.username;
            console.log(state)
            return state;
        case LOGOUT:
            state.loggedIn = false;
            state.username = '';
            console.log(state)
            return state;
        default:
            console.log(state)
            return state
    }
};

export default user;