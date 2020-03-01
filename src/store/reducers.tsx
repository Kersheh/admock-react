// import { Reducer, ReducerAction, ReducerState } from 'react';
// import logger, { LogLevel } from '../helpers/logger';
//
// const initialState: ReducerState<any> = {
//   previewPanel: {}
// };
//
// const actionTypes = {
//   SET_ACTIVE_PREVIEW_TYPE: 'SET_ACTIVE_PREVIEW_TYPE'
// };
//
// const reducer: Reducer<any, any> = (state = initialState, action) => {
//   logger.log(LogLevel.LOG, {
//     oldState: state,
//     type: action.type,
//     payload: action.payload
//   });
//
//   switch (action.type) {
//     case actionTypes.SET_ACTIVE_PREVIEW_TYPE:
//       return {
//         ...state,
//         previewPanel: {}
//       };
//     default:
//       throw new Error('Unexpected action');
//   }
// };
//

const initialState = () => {
  console.log('TODO: initialState fn()');
};
const actionTypes = () => {
  console.log('TODO: actionTypes fn()');
};
const reducer = () => {
  console.log('TODO: reducer fn()');
};

export { initialState, actionTypes, reducer };
