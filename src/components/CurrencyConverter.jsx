import React, { useState, useEffect } from 'react';
import useConversionRates from './../hooks/useConversionRates';
import useCurrencies from '../hooks/useCurrencies';
import RateDisplay from './RateDisplay';
import ConversionButton from './ConversionButton';
import ErrorAlert from './ErrorAlert';

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(1);
  const [currencies, setCurrencies] = useState([]);
  const [toAmountFocus, setToAmountFocus] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { conversionRates } = useConversionRates(
    fromCurrency,
    toCurrency,
    toAmountFocus,
    setErrorMessage
  );

  useCurrencies(setCurrencies, setErrorMessage);

  useEffect(() => {
    const updateToAmount = () => {
      const rate = conversionRates[fromCurrency]?.[toCurrency] || 0;
      const result = parseFloat(fromAmount) * rate;
      if (result)
        setToAmount(result.toFixed(2));
        else
        setToAmount('');
    };

    if (!toAmountFocus) {
      updateToAmount();
    }
  }, [fromCurrency, toCurrency, fromAmount, conversionRates, toAmountFocus]);

  const handleFromAmountChange = (e) => {
    const value = e.target.value;
    setFromAmount(value);
  };

  const handleToAmountChange = (e) => {
    const value = e.target.value;
    setToAmount(value);

    if (value !== '') {
      const rate = conversionRates[fromCurrency]?.[toCurrency] || 0;
      const result = parseFloat(value) / rate;
      setFromAmount(result.toFixed(2));
    }else {
      setFromAmount('');
    }
        
  };

  const invertConversion = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
  };

  const handleToAmountFocus = () => {
    setToAmountFocus(true);
  };

  const handleToAmountBlur = () => {
    setToAmountFocus(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                {errorMessage && (
                  <ErrorAlert message={errorMessage} onClose={() => setErrorMessage(null)} />
                )}
                <label htmlFor="fromCurrency" className="form-label">
                  From
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    id="fromCurrency"
                    placeholder="0.00"
                    value={fromAmount}
                    onChange={handleFromAmountChange}
                  />
                  <select
                    className="form-select"
                    id="fromCurrencyType"
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="toCurrency" className="form-label">
                  To
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    id="toCurrency"
                    placeholder="0.00"
                    value={toAmount}
                    onChange={handleToAmountChange}
                    onFocus={handleToAmountFocus}
                    onBlur={handleToAmountBlur}
                  />
                  <select
                    className="form-select"
                    id="toCurrencyType"
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <RateDisplay fromCurrency={fromCurrency} toCurrency={toCurrency} conversionRates={conversionRates} />

              <ConversionButton onClick={invertConversion} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
