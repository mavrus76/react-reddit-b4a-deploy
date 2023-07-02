import React from 'react';
import { noop } from '../../utils/js/noop';

interface IReplyContext {
  value: string;
  onChange: (value: string) => void;
}

export const replyContext = React.createContext<IReplyContext>({
  value: '',
  onChange: noop,
});
