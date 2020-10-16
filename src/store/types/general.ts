import * as actionTypes from '../actions/actionTypes';

// initialState for reducers
export interface GeneralState {
  language: string;
}

// actions and payloads
export interface SwitchLanguageAction {
  type: typeof actionTypes.SWITCH_LANGUAGE;
  language: string;
}

// combine and export all action types in general
export type GeneralActionTypes = SwitchLanguageAction;
