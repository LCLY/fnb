import * as actionTypes from '../actions/actionTypes';
// '?' meaning optional

// initialState for reducers
export interface AuthState {
  readonly error: string | null;
  readonly loading: boolean;
  readonly isAdmin: boolean;
  readonly authToken: string | null;
}

// to further breakdown the state, use in mapStateToProps
export interface IAuthMapState {
  readonly auth: AuthState;
}

/* ============================================================== */
// All the actiontypes with their payload
export interface AuthenticateAction {
  type: typeof actionTypes.AUTHENTICATE;
  username: string;
  password: string;
}
export interface AuthenticateStartAction {
  type: typeof actionTypes.AUTHENTICATE_START;
}
export interface AuthenticateSucceedAction {
  type: typeof actionTypes.AUTHENTICATE_SUCCEED;
  authToken: string;
}
export interface AuthenticateFailedAction {
  type: typeof actionTypes.AUTHENTICATE_FAILED;
  error: string;
}
export interface AuthenticateCheckStateAction {
  type: typeof actionTypes.AUTHENTICATE_CHECK_STATE;
}
export interface ClearAuthenticateStateAction {
  type: typeof actionTypes.CLEAR_AUTH_STATE;
}

export interface LogoutSucceedAction {
  type: typeof actionTypes.LOGOUT_SUCCEED;
}

// combine and export all action types
export type AuthenticateActionTypes =
  | AuthenticateAction
  | AuthenticateStartAction
  | AuthenticateSucceedAction
  | AuthenticateFailedAction
  | AuthenticateCheckStateAction
  | ClearAuthenticateStateAction
  | LogoutSucceedAction;
