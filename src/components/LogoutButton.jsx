import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const LogoutButton = ({setIsLoggedIn}) => {
  const nav = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    function logout() {
      sessionStorage.removeItem('accessToken')
      sessionStorage.removeItem('user')
      setIsLoggedIn(false)
      nav('/')
    }

    if (isLoading) {
      logout()
    }
  }, [isLoading])

  const handleClick = () => {
    setIsLoading(true)
  }

  return (
    <>
      <Button 
        variant="outline-primary" 
        size="sm"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
          {isLoading ? 'Logging out...' : 'Logout'}
      </Button>
    </>
  )
}

export default LogoutButton