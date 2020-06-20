import thunk from 'redux-thunk';
import errorContext from 'client/app/redux/middleware/error';
import example from 'client/app/redux/middleware/example';

const middleware = [
  thunk,
  errorContext,
  example,
];

export default middleware;
