import { Reducer, AnyAction, StoreCreator, StoreEnhancer } from 'redux';
import logger, { LogLevel } from 'src/helpers/logger';

const round = (val: number) => Math.round(val * 100) / 100;

const monitorReducerEnhancer = (createStore: StoreCreator) => (
  reducer: Reducer,
  initialState: any,
  enhancer: StoreEnhancer
) => {
  const monitoredReducer = (state: any, action: AnyAction) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = round(end - start);
    logger.log(LogLevel.INFO, 'reducer process time:', diff);
    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

export default monitorReducerEnhancer;
