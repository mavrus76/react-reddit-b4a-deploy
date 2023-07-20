import { ActionCreator } from 'redux';
import { TThunkActionAsync } from '../me/actions';

export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export type TTokenRequestAction = {
  type: typeof TOKEN_REQUEST;
};
export const tokenRequest: ActionCreator<TTokenRequestAction> = () => ({
  type: TOKEN_REQUEST,
});

export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
export type TTokenRequestSuccessAction = {
  type: typeof TOKEN_REQUEST_SUCCESS;
  token: string;
};
export const tokenRequestSuccess: ActionCreator<TTokenRequestSuccessAction> = (
  token: string,
) => ({
  type: TOKEN_REQUEST_SUCCESS,
  token,
});

export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';
export type TTokenRequestErrorAction = {
  type: typeof TOKEN_REQUEST_ERROR;
  error: string;
};
export const tokenRequestError: ActionCreator<TTokenRequestErrorAction> = (
  error: string,
) => ({
  type: TOKEN_REQUEST_ERROR,
  error,
});

export const saveToken = (): TThunkActionAsync => (dispatch, getState) => {
  try {
    dispatch(tokenRequest());
    const token = window.__token__;
    dispatch(tokenRequestSuccess(token));
    // localStorage.clear();
    // const token = localStorage.getItem('token') || window.__token__;
    // if (token && token !== 'undefined') {
    //   localStorage.setItem('token', token);
    //   dispatch(tokenRequestSuccess(token));
    // }
  } catch (error) {
    dispatch(tokenRequestError(String(error)));
  }
};
