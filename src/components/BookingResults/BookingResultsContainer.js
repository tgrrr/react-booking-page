import React from 'react';
import { useFetchBookings } from '../../hooks/useFetch';
import BookingResults from './BookingResults';

const BookingResultsContainer = () => {
  
  const results = useFetchBookings();

  return results && <BookingResults results={results} />;
};

export default BookingResultsContainer;
