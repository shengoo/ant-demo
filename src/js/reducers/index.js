import { combineReducers } from 'redux';

import languageReducer from './languageReducer';
import userReducer from './user';

const rootReducer = combineReducers({userReducer});

export default rootReducer;