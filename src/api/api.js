import { API_BASE_URL, STUDENTS } from './endpoints.js'


const accessToken = sessionStorage.getItem('accessToken')

async function get(endpoint) {
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

async function search(endpoint, search) {
  const res = await fetch(`${API_BASE_URL}${endpoint}/results?search=${search}`, {
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

export { get, search }