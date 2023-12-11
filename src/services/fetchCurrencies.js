import { REACT_APP_CURRENCIES_URL } from './../config'

export const fetchCurrencies = async () => {
  try {
    const response = await fetch(REACT_APP_CURRENCIES_URL)
    const data = await response.json()
    return Object.keys(data.data)
  } catch (error) {
    throw new Error(`Error fetching currencies: ${error}`)
  }
}
