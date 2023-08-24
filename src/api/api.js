import { API_BASE_URL, STUDENTS } from './endpoints.js'

async function get(endpoint) {
  let accessToken = sessionStorage.getItem('accessToken')

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'accessToken': `${accessToken}`,
        }
      }
      )
      const data = await res.json()
      return data
}

export { get }