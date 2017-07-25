import { combineReducers } from 'redux';

import lang from './languageReducer';
import user from './userReducer';

const rootReducer = combineReducers({
    lang,
    user
});

export default rootReducer;