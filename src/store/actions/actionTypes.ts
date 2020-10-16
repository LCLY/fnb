/* ========== States ========== */

/* ---------------------------------------------------------------------------------- */
/* ==================================== General ===================================== */

// General states that will be shared among components
export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

/* =================================== (General) ==================================== */
/* ---------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------- */
/* ================================ Authentication ================================== */
// Authenticate
export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATE_START = 'AUTHENTICATE_START';
export const AUTHENTICATE_SUCCEED = 'AUTHENTICATE_SUCCEED';
export const AUTHENTICATE_FAILED = 'AUTHENTICATE_FAILED';
export const AUTHENTICATE_CHECK_STATE = 'AUTHENTICATE_CHECK_STATE';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCEED = 'LOGOUT_SUCCEED';

// Access token
export const GET_ACCESS_TOKEN = 'GET_ACCESS_TOKEN';
export const GET_ACCESS_TOKEN_START = 'GET_ACCESS_TOKEN_START';
export const GET_ACCESS_TOKEN_SUCCEED = 'GET_ACCESS_TOKEN_SUCCEED';
export const GET_ACCESS_TOKEN_FAILED = 'GET_ACCESS_TOKEN_FAILED';

// clear state
export const CLEAR_AUTH_STATE = 'CLEAR_AUTH_STATE';

/* =============================== (Authentication) ================================= */
/* ---------------------------------------------------------------------------------- */
