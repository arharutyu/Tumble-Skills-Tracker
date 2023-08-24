import { API_BASE_URL } from './endpoints.js'


const accessToken = sessionStorage.getItem('accessToken')

// GET request
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

// GET request with query parameters
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

// GET skills from level
async function skills(level) {
  const res = await fetch(`${API_BASE_URL}/skills/level/${level}`, {
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

export { get, search, skills }