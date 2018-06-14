import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ cents }) => (
    <span className="green ui ribbon label">
        ${(cents/100).toFixed(2)} {cents < 3000 && "!"}
    </span>
);

Price.propTypes = {
  cents: PropTypes.number.isRequired
};

export default Price;