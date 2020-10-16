import { put /*, delay */ /*, call */ } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

/* ============================================================================================ */
/* ============================================================================================ */

/* ========== User Login ========== */
export function* authenticationSaga(action: { username: string; password: string }) {
  yield put(actions.authenticateStart());

  console.log(action.username, action.password);
  const authData = {
    email: action.username,
    password: action.password,
  };

  let url = `https://eah-staging.herokuapp.com/api/v1/sign_in`;

  try {
    let response = yield axios.post(url, { user: authData });
    console.log(response);
    // Store refresh token and expiration time in localstorage
    // const expirationTime = yield new Date(new Date().getTime() + response.data.expires_in * 1000);
    // yield localStorage.setItem('expirationTime', expirationTime);
    // yield localStorage.setItem('refreshToken', response.data.refresh_token);
    // yield localStorage.setItem('accessToken', response.data.access_token);

    // yield put(actions.authenticateSucceed(response.data.access_token)); //store access token into redux
    yield put(actions.authenticateCheckState());
  } catch (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log('error response data:', error.response.data);
      console.log('error response status:', error.response.status);
      console.log('error response header:', error.response.headers);
      yield put(actions.authenticateFailed(error.response.data));
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log('error response request:', error.request);
      yield put(actions.authenticateFailed(error.request));
    } else {
      // Something happened in setting up the request and triggered an Error
      alert('Error:' + error.message);
    }
  }
}
/* ============================================================================================ */
/* ============================================================================================ */

/* ========== Get New Access and Refresh Token ========== */
// export function* getAccessTokenSaga(action) {
//   yield put(actions.getAccessTokenStart());

//   const authData = {
//     schema: 'public',
//     grant_type: 'password',
//     refresh_token: localStorage.getItem('refresh_token'),
//   };

//   let url = `https://fineapps.finevotech.net/CoreNet/oauth/token`;

//   try {
//     let response = yield axios.post(url, authData);

//     // Store refresh token and expiration time in localstorage
//     const expirationTime = yield new Date(new Date().getTime() + response.data.expires_in * 1000);
//     yield localStorage.setItem('expirationTime', expirationTime);
//     yield localStorage.setItem('refreshToken', response.data.refresh_token);
//     yield localStorage.setItem('accessToken', response.data.access_token);
//     yield put(actions.getAccessTokenSucceed(response.data.access_token)); //store access token into redux
//   } catch (error) {
//     if (error.response) {
//       /*
//        * The request was made and the server responded with a
//        * status code that falls out of the range of 2xx
//        */
//       console.log('error response data:', error.response.data);
//       console.log('error response status:', error.response.status);

//       console.log('error response header:', error.response.headers);
//       yield put(actions.getAccessTokenFailed(error.response.data));
//       // logout when get new access token endpoint failed
//       yield put(actions.logout());
//     } else if (error.request) {
//       /*
//        * The request was made but no response was received, `error.request`
//        * is an instance of XMLHttpRequest in the browser and an instance
//        * of http.ClientRequest in Node.js
//        */
//       console.log('error response request:', error.request);
//     } else {
//       // Something happened in setting up the request and triggered an Error
//       alert('Error:', error.message);
//     }
//   }
// }

// /* ============================================================================================ */
// /* ============================================================================================ */

// /* ========== Authentication Check State ========== */
// // check if user is logged in
// export function* authenticationCheckStateSaga(action) {
//   const expirationTime = yield new Date(localStorage.getItem('expirationTime'));

//   let currentTime = new Date();

//   let diff = (expirationTime.getTime() - currentTime.getTime()) / 1000;
//   diff /= 60;
//   diff = Math.abs(Math.round(diff));

//   // Only get new access token when 15 minutes ore less are left
//   if (diff <= 15) {
//     console.log('Token expired! Getting a new access token');
//     // if expired, get new with refresh access token
//     yield put(actions.getAccessToken());
//   }

//   // if the 1 hour totally expired, then logout
//   if (expirationTime < currentTime) {
//     yield put(actions.logout());
//   }
// }

// /* ============================================================================================ */
// /* ============================================================================================ */

// /* ========== Logout ========== */
// // Logout the user
// export function* logoutSaga(action) {
//   yield call([localStorage, 'removeItem'], 'isAdmin');
//   yield call([localStorage, 'removeItem'], 'accessToken');
//   yield call([localStorage, 'removeItem'], 'refreshToken');
//   yield call([localStorage, 'removeItem'], 'expirationTime');
//   yield call([localStorage, 'clear']);
//   yield put(actions.logoutSucceed());
// }

// /* ============================================================================================ */
// /* ============================================================================================ */
