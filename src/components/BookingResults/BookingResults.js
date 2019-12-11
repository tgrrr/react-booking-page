import React from 'react';
import PropTypes from 'prop-types';
import BookingResult from './_BookingResult';
import { Table as BootstrapTable } from 'react-bootstrap';

import styles from './BookingResults.module.css';

const BookingResults = ({results}) => (
  <div
    className={styles.BookingResults__items}
    data-testid='BookingResults__items'
  >
    {console.log(results)}
    <BootstrapTable bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Cost</th>
          <th>Start Year</th>
          <th>Final Year</th>
        </tr>
      </thead>
      <tbody>
        {results.map(({
          quantity,
          startDate,
          endDate,
          productId,
          rate,
          name,
          id,
          ...rest
        }) => (
          <tr key={id}>
            <BookingResult
              quantity={quantity}
              startDate={startDate}
              endDate={endDate}
              productId={productId}
              name={name}
              rate={rate}
              id={id}
              {...rest}
            />
          </tr>
        ))}
      </tbody>
    </BootstrapTable>

  </div>
);

BookingResults.propTypes = {
  results: PropTypes.array,
};

BookingResults.defaultProps = {
  movieDbResults: [],
};

export default BookingResults;
