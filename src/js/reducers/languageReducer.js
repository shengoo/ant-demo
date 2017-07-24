import {LANG_CHANGE} from '../actions';

const languageReducer = (state = {},action) => {
    state.lang = state.lang === 'zh_CN' ? 'en_US' : 'zh_CN';
    return state;
}

export default languageReducer;