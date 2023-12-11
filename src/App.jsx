import React from 'react';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card bg-secondary text-white">
        <div className="card-body">
          <h1 className="text-center mb-4">Currency Converter</h1>
          <CurrencyConverter />
        </div>
      </div>
    </div>
  );
}

export default App;
