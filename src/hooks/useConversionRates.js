import { useState, useEffect } from 'react'
import { fetchCurrencyConverter } from '../services/fetchCurrencyConverter'

const useConversionRates = (
  fromCurrency,
  toCurrency,
  toAmountFocus,
  setErrorMessage
) => {
  const [conversionRates, setConversionRates] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCurrencyConverter(
          fromCurrency,
          toCurrency,
          setErrorMessage
        )
        setConversionRates({ [fromCurrency]: { [toCurrency]: result } })
      } catch (error) {
        setErrorMessage(error.message)
      }
    }

    fetchData()
  }, [fromCurrency, toCurrency, toAmountFocus])

  return { conversionRates }
}

export default useConversionRates
