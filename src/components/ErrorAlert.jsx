import React from 'react';

const ErrorAlert = ({ message, onClose }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default ErrorAlert;
