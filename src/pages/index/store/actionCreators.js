import * as constants from './constants';

const changIndexData = (result) => ({
	type: constants.INDEX_DATA,
	indexList: result.indexList
});

export const getIndexInfo = () => {
	return (dispatch) => {
    const result = {
      indexList: [
        {
          id: 111,
          title: 'indexList111'
        },
        {
          id: 222,
          title: 'indexList222'
        }
      ]
    }
    dispatch(changIndexData(result));
	}
}