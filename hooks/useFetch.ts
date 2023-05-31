import { useEffect, useState } from 'react';
import { IParams, getData } from '../utils/getData';
import { IData } from '../types/types';

const useFetch = () => {
  const [params, setParams] = useState<IParams>({
    search: '',
    sort: '',
  });
  const [data, setData] = useState<IData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  async function fetchData(params: IParams) {
    try {
      setLoading(true);
      const fetchedData = await getData(params);
      setLoading(false);
      setData(fetchedData);
    } catch {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchData(params);
  }, [params]);

  return { data, loading, error, setParams };
};

export { useFetch };
