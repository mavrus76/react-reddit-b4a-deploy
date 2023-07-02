import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export function useGetId() {
  const [id, setId] = useState('');

  useEffect(() => {
    if (window.location.pathname) {
      setId(window.location.pathname.split('/')[2]);
    }
  }, []);

  return [id];
}
