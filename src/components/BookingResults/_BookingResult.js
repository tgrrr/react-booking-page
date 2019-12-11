import React from 'react';
import PropTypes from 'prop-types';
import { Col } from '../../common/styles';
import {
  getFirstChars,
  formatYear,
//   formatRating,
//   formatLanguage,
} from '../../common/utils';

// Layout Component for BookingResult
const BookingResult = props => {

const {
  endDate,
  productId,
  name,
  quantity,
  rate,
  startDate,
  } = props;

  const rawCost = (rate * quantity / 1000 / 100)
  const costRound = Math.round(rawCost * 100) / 100

  return (
    <>
      <Col>
        {getFirstChars(productId, 5)}
      </Col>
      <Col>
        {name}
      </Col>
      <Col>
        {quantity}
      </Col>
      <Col>
        {rate}
      </Col>
      <Col>
        {costRound}
      </Col>
      <Col>
        {formatYear(startDate)}
      </Col>
      <Col>
        {formatYear(endDate)}
      </Col>
    </>
    );
}

BookingResult.propTypes = {
  first_air_date: PropTypes.string,
};

BookingResult.defaultProps = {
};

export default BookingResult;
