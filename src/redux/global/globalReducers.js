import types from '../types';

export const globalReducerLoader = (state = 0, action) => {
  switch (action.type) {
    case types.IS_LOADING:
      return action.payload;
    default:
      return state;
  }
};

const globalReducer = {
  reducerLoader: globalReducerLoader,
};

export default globalReducer;
