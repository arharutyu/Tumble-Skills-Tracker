import { API_BASE_URL } from './endpoints.js'

// GET request
async function get(endpoint, accessToken) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`,
        }
      }
      )
      const data = await res.json()
      return data
}

// GET request with query parameters
async function search(endpoint, search, accessToken) {
  const res = await fetch(`${API_BASE_URL}${endpoint}/results?search=${search}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`,
        }
      }
      )
      const data = await res.json()
      return data
}

// GET skills from level
async function skills(level, accessToken) {
  const res = await fetch(`${API_BASE_URL}/skills/level/${level}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`,
        }
      }
      )
      const data = await res.json()
      return data
}

// POST request
async function post(endpoint, body, accessToken) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${accessToken}`,
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error(`Request failed with status: ${res.status}`)
    }

    return res
  } catch (error) {
    console.error('Error while making POST request:', error)
    throw error
  }
}

// PUT request
async function put(endpoint, body, accessToken) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${accessToken}`,
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error(`Request failed with status: ${res.status}`)
    }

    return res
  } catch (error) {
    console.error('Error while making PUT request:', error)
    throw error
  }
}

// DELETE request
async function del(endpoint, id, accessToken) {
  const res = await fetch(`${API_BASE_URL}${endpoint}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`,
        }
      }
      )
      const data = await res.json()
      return data
}

export { get, search, skills, post, put, del }