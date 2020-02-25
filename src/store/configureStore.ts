import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { Store } from 'redux';
import thunkMiddleware from 'redux-thunk';

import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootReducer from 'src/reducers';

export default function configureStore(preloadedState?: any): Store {
  const middlewares = [loggerMiddleware, thunkMiddleware] as Array<Middleware>;
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(...enhancers)
  );

  return store;
}
