// Examples to remove in favour of local management

import actionTypes from 'src/constants/actionTypes';

export function openClose() {
  return {
    type: actionTypes.SIDEBAR.OPEN_CLOSE
  };
}

export function setCategory(category: string) {
  return {
    type: actionTypes.SIDEBAR.SET_CATEGORY,
    category
  };
}
