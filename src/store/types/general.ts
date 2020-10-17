import * as actionTypes from '../actions/actionTypes';

// initialState for reducers
export interface GeneralState {
  readonly language: string;
}

// to further breakdown the state, use in mapStateToProps
export interface IGeneralMapState {
  readonly general: GeneralState;
}

/* ============================================================== */
// actions and payloads
export interface SwitchLanguageAction {
  type: typeof actionTypes.SWITCH_LANGUAGE;
  language: string;
}

// combine and export all action types in general
export type GeneralActionTypes = SwitchLanguageAction;
