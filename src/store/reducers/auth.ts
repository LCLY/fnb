import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/Utils';
import { AuthenticateActionTypes, AuthState } from '../types/auth';

const initialState: AuthState = {
  error: null,
  loading: false,
  isAdmin: false,
  accessToken: null,
};

/* ============================================================================================ */
/* ============================================================================================ */
// Clear Auth State - reset the states
const clearAuthState = (state: AuthState, _action: any) => {
  return updateObject(state, { error: null });
};

/* ============================================================================================ */
/* ============================================================================================ */

// Authenticate
const authenticateStart = (state: AuthState, _action: any) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const authenticateSucceed = (state: AuthState, action: { accessToken: string }) => {
  return updateObject(state, {
    error: null,
    loading: false, //when login succeed stop the loading
    accessToken: action.accessToken,
  });
};

const authenticateFailed = (state: AuthState, action: { error: string }) => {
  // get the error and stop the loading
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

/* ============================================================================================ */
/* ============================================================================================ */

// logout
const logoutSucceed = (state: AuthState, _action: any) => {
  // clear the accesstoken when user logout or any state in the future
  return updateObject(state, {
    isAdmin: false,
    accessToken: null,
  });
};

/* ============================================================================================ */
/* ============================================================================================ */

const reducer = (state = initialState, action: AuthenticateActionTypes) => {
  switch (action.type) {
    // Clear Auth State
    case actionTypes.CLEAR_AUTH_STATE:
      return clearAuthState(state, action);

    // Authentication
    case actionTypes.AUTHENTICATE_START:
      return authenticateStart(state, action);
    case actionTypes.AUTHENTICATE_SUCCEED:
      return authenticateSucceed(state, action);
    case actionTypes.AUTHENTICATE_FAILED:
      return authenticateFailed(state, action);

    // Logout
    case actionTypes.LOGOUT_SUCCEED:
      return logoutSucceed(state, action);

    default:
      return state;
  }
};

export default reducer;
