import { API_BASE_URL } from './endpoints.js'

// GET request
async function get(endpoint, accessToken) {
  try {  
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
  } catch (error) {
        console.error('Error while making GET request:', error)
        throw error
      }
}

// GET request with query parameters
async function search(endpoint, search, accessToken) {
  try {
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
    } catch (error) {
      console.error('Error while making GET request with query params:', error)
      throw error
    }
}

// GET skills from level
async function skills(level, accessToken) {
  try {
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
    } catch (error) {
      console.error('Error while making GET request from level:', error)
      throw error
    }
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

    // if (!res.ok) {
    //   throw new Error(`Request failed with status: ${res.status}`)
    // }

    return res
  } catch (error) {
    console.error('Error while making PUT request:', error)
    throw error
  }
}

// DELETE request
async function del(endpoint, id, accessToken) {
  try {
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
    } catch (error) {
      console.error('Error while making GET request:', error)
      throw error
    }
}

export { get, search, skills, post, put, del }