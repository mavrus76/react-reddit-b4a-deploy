import { Reducer } from 'react';
import {
  TOKEN_REQUEST,
  TOKEN_REQUEST_ERROR,
  TOKEN_REQUEST_SUCCESS,
  TTokenRequestAction,
  TTokenRequestErrorAction,
  TTokenRequestSuccessAction,
} from './actions';

export type TTokenState = {
  loading: boolean;
  error: string;
  token: string;
};

export type TTokenActions =
  | TTokenRequestAction
  | TTokenRequestSuccessAction
  | TTokenRequestErrorAction;

export const tokenReducer: Reducer<TTokenState, TTokenActions> = (
  state,
  action,
) => {
  switch (action.type) {
    case TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TOKEN_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case TOKEN_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
      };
    default:
      return state;
  }
};
