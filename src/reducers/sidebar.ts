// Examples to remove in favour of local management

import { AnyAction } from 'redux';
import actionTypes from 'src/constants/actionTypes';
import CONSTANTS from 'src/constants/common';

const initialState = {
  isCollapsed: false,
  category: CONSTANTS.MEDIA_TYPES.FACEBOOK
};

export default (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case actionTypes.SIDEBAR.OPEN_CLOSE:
      return { ...state, isCollapsed: !state.isCollapsed };
    case actionTypes.SIDEBAR.SET_CATEGORY:
      return { ...state, category: action.category };
  }

  return state;
};
