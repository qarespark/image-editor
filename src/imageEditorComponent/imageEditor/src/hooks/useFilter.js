
import { useCallback, useMemo } from 'react';


import { ADD_FILTER } from '../actions';
import useStore from './useStore';

const useFilter = () => {
  const { dispatch, filter } = useStore();

  const setFilter = useCallback((filterToApply) => {
    dispatch({
      type: ADD_FILTER,
      payload: {
        filter: filterToApply,
      },
    });
  }, []);

  return useMemo(() => [filter, setFilter], [filter]);
};

export default useFilter;
