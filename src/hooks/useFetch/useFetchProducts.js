import { useEffect, useState } from 'react';
import axios from 'axios';
import fetchProduct from '../../services/api/fetchProduct';

const useFetchProducts = (id) => {
  const [ProductResults, setProductResults] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let isSubscribed = true;
    const { CancelToken } = axios;
    const source = CancelToken.source();

    fetchProduct(id, source, error)
      .then(results => (isSubscribed ? setProductResults(results) : null))
      .catch(error => (isSubscribed ? setError(error.toString()) : null));

    return () => {
      source.cancel('Effect cleared');
      isSubscribed = false;
    };
  }, [error, id, setError, setProductResults]);

  return ProductResults;
};

export default useFetchProducts;
