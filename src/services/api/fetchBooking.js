import axios from 'axios';
import setAxiosDefaults from './setAxiosDefaults';

async function fetchBooking() {
  setAxiosDefaults();

  const request = () => axios.get('bookings');

  return request()
    .then(res => res.data.data)
}

export default fetchBooking;
