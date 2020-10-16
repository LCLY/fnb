// Handle general shared states
import { AppActions } from '../types/index';
import * as actionTypes from './actionTypes';
/* ============================================================================================ */
/* ============================================================================================ */
// Switch up language
export const switchLanguage = (language: string): AppActions => {
  return {
    type: actionTypes.SWITCH_LANGUAGE,
    language: language,
  };
};
