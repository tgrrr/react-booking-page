import axios from 'axios';
import setAxiosDefaults from './setAxiosDefaults';

async function fetchProduct(id) {
  setAxiosDefaults();

  const request = () => axios.get('products');

  return request(id)
    .then(res => res.data.data)
    // eslint-disable-next-line
    .catch(error => console.log('error: ', error));
}

export default fetchProduct;
