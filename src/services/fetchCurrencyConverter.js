import { REACT_APP_EXCHANGE_RATES_URL } from '../config'

const fetchCurrencyConverter = async (
  fromCurrency,
  toCurrency,
  setErrorMessage
) => {
  try {
    const response = await fetch(
      `${REACT_APP_EXCHANGE_RATES_URL}&base_currency=${fromCurrency}&currencies=${toCurrency}`
    )
    if (response.status === 429) {
      setErrorMessage('Converter limit exceeded. Please try again later.')
      return
    } else {
      setErrorMessage(null)
    }
    const data = await response.json()
    return data.data[toCurrency]
  } catch (error) {
    setErrorMessage('Error fetching exchange rates:', error)
  }
}

export { fetchCurrencyConverter }
