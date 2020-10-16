import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/Utils';
import { GeneralActionTypes, GeneralState } from '../types/general';

const initialState: GeneralState = {
  language: 'en',
};

/* ============================================================================================ */
/* ============================================================================================ */
// Switch language- reset the states
const switchLanguage = (state: GeneralState, action: { language: string }) => {
  return updateObject(state, { language: action.language });
};

/* ============================================================================================ */
/* ============================================================================================ */

const reducer = (state = initialState, action: GeneralActionTypes) => {
  switch (action.type) {
    // Switch language
    case actionTypes.SWITCH_LANGUAGE:
      return switchLanguage(state, action);

    default:
      return state;
  }
};

export default reducer;
