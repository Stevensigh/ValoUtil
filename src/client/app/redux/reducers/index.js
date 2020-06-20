import { combineReducers } from 'redux';
import exampleReducer from 'client/app/redux/reducers/example';

const reducer = combineReducers({
  example: exampleReducer,
});

export default reducer;
