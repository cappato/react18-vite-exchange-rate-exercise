import React from 'react';

const RateDisplay = ({ fromCurrency, toCurrency, conversionRates }) => (
  <div className="mb-3">
    <label htmlFor="conversionRate" className="form-label">
      Rate
    </label>
    <div className="d-flex align-items-center">
      <span className="me-2">{`1 ${fromCurrency} ≈ ${
        conversionRates[fromCurrency]?.[toCurrency] || ''
      } ${toCurrency}`}</span>
    </div>
  </div>
);

export default RateDisplay;
