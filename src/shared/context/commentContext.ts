import React from 'react';
import { noop } from '../../utils/js/noop';

interface ICommentContext {
  value: string;
  onChange: (value: string) => void;
}

export const commentContext = React.createContext<ICommentContext>({
  value: '',
  onChange: noop,
});
