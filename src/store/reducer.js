import { combineReducers } from 'redux-immutable';
import { reducer as indexReducer } from '../pages/index/store';

const reducer = combineReducers({
	index: indexReducer
});

export default reducer;