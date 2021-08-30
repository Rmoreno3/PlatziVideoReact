/* eslint-disable semi */
/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
  registerRequest: 'REGISTER_REQUEST',
  getVideoSource: 'GET_VIDEO_SOURCE',
  searchVideo: 'SEARCH_VIDEO',
  setError: 'SET_ERROR',
  registerUser: 'REGISTER_USER',
};

export const setFavorite = (payload) => ({
  type: actions.setFavorite,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: actions.deleteFavorite,
  payload,
});

export const loginRequest = (payload) => ({
  type: actions.loginRequest,
  payload,
});

export const logoutRequest = (payload) => ({
  type: actions.logoutRequest,
  payload,
});

export const registerRequest = (payload) => ({
  type: actions.registerRequest,
  payload,
});

export const getVideoSource = (payload) => ({
  type: actions.getVideoSource,
  payload,
});

export const searchVideo = (payload) => ({
  type: actions.searchVideo,
  payload,
});

export const setError = (payload) => ({
  type: actions.setError,
  payload,
});

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    debugger;
    axios
      .post('https://platzivideo-api-two.vercel.app/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export { setFavorite as default };
