import { combineReducers } from 'redux';
import types from '../types';

const isModalAddTransactionOpen = (state = false, { type }) => {
  switch (type) {
    case types.OPEN_MODALADDTRANSACTION:
      return true;
    case types.CLOSE_MODALADDTRANSACTION:
      return false;
    default:
      return state;
  }
};
const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.GLOBAL_FETCH_START:
      return true;
    case types.GLOBAL_FETCH_FINISH:
    case types.GLOBAL_FETCH_ERROR:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  isModalAddTransactionOpen,
  loading: loadingReducer,
});
