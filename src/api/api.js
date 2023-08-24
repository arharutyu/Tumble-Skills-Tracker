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

// POST request
async function post(endpoint, body) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Request failed with status: ${res.status}`);
    }

    return res;
  } catch (error) {
    console.error('Error while making POST request:', error);
    throw error;
  }
}

export { get, search, skills, post }