import * as actionTypes from './actionTypes';

/* ============================================================================================ */
/* ============================================================================================ */
// Clear auth state
export const clearAuthState = () => {
  return {
    type: actionTypes.CLEAR_AUTH_STATE,
  };
};

/* ============================================================================================ */
/* ============================================================================================ */
// Authentication
export const authenticate = (username, password) => {
  return {
    type: actionTypes.AUTHENTICATE,
    username: username,
    password: password,
  };
};

export const authenticateStart = () => {
  return {
    type: actionTypes.AUTHENTICATE_START,
  };
};

export const authenticateSucceed = (accessToken) => {
  return {
    type: actionTypes.AUTHENTICATE_SUCCEED,
    accessToken: accessToken,
  };
};
export const authenticateFailed = (error) => {
  return {
    type: actionTypes.AUTHENTICATE_FAILED,
    error: error,
  };
};

// Check the expiration time
// export const authenticateCheckTimeout = (expirationTime) => {
//   return {
//     type: actionTypes.AUTHENTICATE_CHECK_TIMEOUT,
//     expirationTime: expirationTime,
//   };
// };

// check if user is logged in or not
export const authenticateCheckState = () => {
  return {
    type: actionTypes.AUTHENTICATE_CHECK_STATE,
  };
};

/* ============================================================================================ */
/* ============================================================================================ */

/* Logout */
export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
export const logoutClearState = () => {
  return {
    type: actionTypes.LOGOUT_CLEAR_STATE,
  };
};

export const logoutSucceed = () => {
  return {
    type: actionTypes.LOGOUT_SUCCEED,
  };
};

/* ============================================================================================ */
/* ============================================================================================ */
// Get access token
export const getAccessToken = () => {
  return {
    type: actionTypes.GET_ACCESS_TOKEN,
  };
};

export const getAccessTokenStart = (refreshToken) => {
  return {
    type: actionTypes.GET_ACCESS_TOKEN_START,
    refreshToken: refreshToken,
  };
};

export const getAccessTokenSucceed = () => {
  return {
    type: actionTypes.GET_ACCESS_TOKEN_SUCCEED,
  };
};
export const getAccessTokenFailed = (error) => {
  return {
    type: actionTypes.GET_ACCESS_TOKEN_FAILED,
    error: error,
  };
};

/* ============================================================================================ */
/* ============================================================================================ */
