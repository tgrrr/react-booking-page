import React from 'react';

const Col = ({children}) => (
  <td>
    <span
      className='Col'
      data-testid='Col'
    >
      {children}
    </span>
  </td>
)

export default Col;
