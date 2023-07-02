import React, { useMemo } from 'react';
import { usePostsData } from '../hooks/usePostsData';
import { noop } from '../../utils/js/noop';

export interface IPostContextData {
  postId: string;
  author: string;
  title: string;
  previewImg: string;
  createdAt: number;
  avatarSrc: string;
  rating: number;
}

export interface IPostContext {
  data: IPostContextData[];
  loading: boolean;
  errorLoading: string;
  bottomOfList: React.RefObject<HTMLDivElement>;
  count: number;
  handleClick: () => void;
}

export const postsContext = React.createContext<IPostContext>({
  data: [],
  loading: false,
  errorLoading: '',
  bottomOfList: React.createRef(),
  count: 0,
  handleClick: noop,
});

export function PostsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, loading, errorLoading, bottomOfList, count, handleClick } =
    usePostsData();

  const contextValue = useMemo(
    () => ({
      data,
      loading,
      errorLoading,
      bottomOfList,
      count,
      handleClick,
    }),
    [data, loading, errorLoading, bottomOfList, count, handleClick],
  );

  return (
    <postsContext.Provider value={contextValue}>
      {children}
    </postsContext.Provider>
  );
}
