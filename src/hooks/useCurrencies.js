import { useEffect } from 'react'
import { fetchCurrencies } from '../services/fetchCurrencies'

const useFetchCurrencies = (setCurrencies, setErrorMessage) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currencies = await fetchCurrencies()
        setCurrencies(currencies)
      } catch (error) {
        setErrorMessage(error.message)
      }
    }

    fetchData()
  }, [setCurrencies])
}

export default useFetchCurrencies
