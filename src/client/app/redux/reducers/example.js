import { EXAMPLE } from 'client/app/redux/actions/example';
import createReducer from 'client/app/redux/reducers/create-reducer';

const initialState = {
  example: {
    param: null,
  },
};

const exampleReducer = (state, action) => {
  const { param } = action.payload;

  return {
    ...state,
    param,
  };
};

const reducerMapping = {
  [EXAMPLE]: exampleReducer,
};

export default createReducer(reducerMapping, initialState);
