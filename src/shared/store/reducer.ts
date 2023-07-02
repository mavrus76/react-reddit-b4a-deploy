import { ActionCreator, Reducer } from 'redux';
import {
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  TMeRequestAction,
  TMeRequestErrorAction,
  TMeRequestSuccessAction,
} from './me/actions';
import { TMeState, meReducer } from './me/reducer';
import { TTokenState, tokenReducer } from './token/reducer';
import {
  TOKEN_REQUEST,
  TOKEN_REQUEST_ERROR,
  TOKEN_REQUEST_SUCCESS,
  TTokenRequestAction,
  TTokenRequestErrorAction,
  TTokenRequestSuccessAction,
} from './token/actions';

export type TRootState = {
  commentText: string;
  token: TTokenState;
  me: TMeState;
};

const initialState: TRootState = {
  commentText: 'Привет, Skillbox!',
  token: {
    loading: false,
    error: '',
    token: '',
  },
  me: {
    loading: false,
    error: '',
    data: {},
  },
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
};
export const updateComment: ActionCreator<UpdateCommentAction> = (
  text: string,
) => ({
  type: UPDATE_COMMENT,
  text,
});

type MyAction =
  | UpdateCommentAction
  | TMeRequestAction
  | TMeRequestSuccessAction
  | TMeRequestErrorAction
  | TTokenRequestAction
  | TTokenRequestSuccessAction
  | TTokenRequestErrorAction;
export const rootReducer: Reducer<TRootState, MyAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      };
    case TOKEN_REQUEST:
    case TOKEN_REQUEST_SUCCESS:
    case TOKEN_REQUEST_ERROR:
      return {
        ...state,
        token: tokenReducer(state.token, action),
      };
    default:
      return state;
  }
};
