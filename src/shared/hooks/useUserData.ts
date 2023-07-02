import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TRootState } from '../store/reducer';
import { IUserData, meRequestAsync } from '../store/me/actions';

export function useUserData() {
  const data = useSelector<TRootState, IUserData>((state) => state.me.data);
  const loading = useSelector<TRootState, boolean>((state) => state.me.loading);
  const token = useSelector<TRootState, string>((state) => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || token === 'undefined') return;
    dispatch<any>(meRequestAsync());
  }, [token, dispatch]);

  return {
    data,
    loading,
  };
}
