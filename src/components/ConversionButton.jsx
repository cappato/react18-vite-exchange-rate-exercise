import React from 'react';

const ConversionButton = ({ onClick }) => (
  <div className="d-grid">
    <button className="btn btn-primary" onClick={onClick}>
      Invert Conversion
    </button>
  </div>
);

export default ConversionButton;