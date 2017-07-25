import {LANG_CHANGE} from '../actions';

const languageReducer = (state = 'zh_CN', action) => {
    switch (action.type) {
        case
        LANG_CHANGE:
            state = action.lang;
            return state;
        default:
            return state;
    }
}

export default languageReducer;