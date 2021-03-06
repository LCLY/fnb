import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/Utils';
import { AuthenticateActionTypes, AuthState } from '../types/auth';

const initialState: AuthState = {
  error: null,
  loading: false,
  isAdmin: false,
  authToken: null,
  loginSucceed: null,
};

/* ============================================================================================ */
/* ============================================================================================ */
// Clear Auth State - reset the states
const clearAuthState = (state: AuthState, _action: any) => {
  return updateObject(state, { error: null, loginSucceed: null });
};

/* ============================================================================================ */
/* ============================================================================================ */

// Authenticate
const authenticateStart = (state: AuthState, _action: any) => {
  return updateObject(state, {
    error: null,
    loading: true,
    loginSucceed: null,
  });
};

const authenticateSucceed = (state: AuthState, action: { authToken: string }) => {
  return updateObject(state, {
    error: null,
    loading: false, //when login succeed stop the loading
    authToken: action.authToken,
    loginSucceed: true,
  });
};

const authenticateFailed = (state: AuthState, action: { error: string }) => {
  // get the error and stop the loading
  return updateObject(state, {
    loading: false,
    error: action.error,
    loginSucceed: false,
  });
};

/* ============================================================================================ */
/* ============================================================================================ */

// logout
const logoutSucceed = (state: AuthState, _action: any) => {
  // clear the authToken when user logout or any state in the future
  return updateObject(state, {
    authToken: null,
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
