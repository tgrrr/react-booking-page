import { useEffect, useState } from 'react';
import axios from 'axios';
import fetchBooking from '../../services/api/fetchBooking';
import { mergeJson } from '../../common/utils'

const useFetchBookings = () => {
  const [bookingResults, setBookingResults] = useState(null);

  const [error, setError] = useState('');

  useEffect(() => {
    let isSubscribed = true;
    const { CancelToken } = axios;
    const source = CancelToken.source();

    const fetchProductMerge = (results) => {

      // NOTE: this seems really inefficient to me, but calling /products without an idea return random objects
      
      // multiple api calls:
      axios.all(
        results.map(result => 
          axios
            .get(`products/${result.productId}`)
            .then(res => res.data.data)
        ))
        .then(axios.spread((...matchedProducts) => {

          const mergedResults = mergeJson(results, matchedProducts, 'productId', 'id')
          
          setBookingResults(mergedResults)

        }))
        .catch(error => (console.log('error', error)));
    }

    fetchBooking(source, error)
      .then(results => (isSubscribed ? fetchProductMerge(results) : null))
      // .then(results => (isSubscribed ? setBookingResults(results) : null))
      .catch(error => (isSubscribed ? setError(error.toString()) : null));


      
    return () => {
      source.cancel('Effect cleared');
      isSubscribed = false;
    };
  }, [error, setError, setBookingResults]);

  return bookingResults;
};

export default useFetchBookings;
