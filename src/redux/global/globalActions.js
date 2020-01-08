import types from '../types';

const globalActionsSpiner = spiner => ({
  type: types.IS_LOADING,
  payload: spiner,
});

const globalAction = {
  isLoading: globalActionsSpiner,
};

export default globalAction;
