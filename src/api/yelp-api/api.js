import { API_BASE_URL, API_KEY } from './config'
import queryString from 'query-string'

export function get(path, queryParams) {
  const query = queryString.stringify(queryParams)
  return fetch(`${API_BASE_URL}${path}?${query}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      Origin: 'localhost',
      withCredentials: true
    }
  })
}
