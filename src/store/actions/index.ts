export {
  // clear auth state
  clearAuthState,
  // authentication
  authenticate,
  authenticateStart,
  authenticateSucceed,
  authenticateFailed,
  authenticateCheckState,
  // authenticateCheckTimeout,
  // logout
  logout,
  logoutSucceed,
  // get access token
  getAccessToken,
  getAccessTokenStart,
  getAccessTokenSucceed,
  getAccessTokenFailed,
} from './auth';

export { switchLanguage } from './general';
