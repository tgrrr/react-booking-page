import React, { useState } from 'react';
import { useFetchBookings, useFetchProducts } from '../../hooks/useFetch';
import BookingResults from './BookingResults';

const BookingResultsContainer = () => {
  
  const results = useFetchBookings();

  return results && <BookingResults results={results} />;
};

export default BookingResultsContainer;
