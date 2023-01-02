import { useState, useEffect } from 'react'
import * as api from './api'

const useBusinessSearch = (term, location) => {
  const [businesses, setBusinesses] = useState([])
  const [results, setResults] = useState()
  const [searchParams, setSearchParams] = useState({ term, location })

  useEffect(() => {
    setBusinesses([])
    const apiCall = async () => {
      try {
        const rawData = await api.get('./businesses/search', searchParams)
        const response = await rawData.json()
        setBusinesses(response.businesses)
        setResults(response.total)
      } catch (e) {
        console.error(e)
      }
    }
    apiCall()
  }, [searchParams])
  return [businesses, results, searchParams, setSearchParams]
}

export default useBusinessSearch
