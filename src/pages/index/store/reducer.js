import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  indexList: [],
  title: 'TEST'
});

const changeIndexData = (state, action) => {
	return state.merge({
		indexList: fromJS(action.indexList)
	});
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.INDEX_DATA:
			return changeIndexData(state, action);
		default:
			return state;
	}
}