import types from '../types';

const globalActionsSpiner = spiner => ({
  type: types.IS_LOADING,
  payload: spiner,
});

const global = {
  isLoading: globalActionsSpiner,
};

export default global;
