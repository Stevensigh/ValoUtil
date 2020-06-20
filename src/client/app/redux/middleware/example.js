import { EXAMPLE } from 'client/app/redux/actions/example';
import createMiddleware from 'client/app/redux/middleware/create-middleware';

const example = (store, next, action) => next(action);

const middlewareMapping = {
  [EXAMPLE]: example,
};

export default createMiddleware(middlewareMapping);
