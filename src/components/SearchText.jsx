import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './SearchText.css'
import React, { useEffect, useState } from 'react'
import { search } from '../api/api'

const SearchText = ({ text, endpoint, set, accessToken }) => {
  // State to store the value entered in the search input
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setMessage('')
    
    async function clickSearch() {
      set([])
      // Fetch data from the server using the search API and update state
      const data = await search(endpoint, searchValue, accessToken)
      if (data.length > 0) {
        set(data)
      } else {setMessage('No results found.')}
    }

    if (isLoading) {
      clickSearch().then(() => {
        setIsLoading(false)
      })
    }
  }, [isLoading])

  // Function to handle form submission when search button is clicked
  async function submit(event) {
    event.preventDefault()
    setIsLoading(true)
  }

  return (
    <>
      <Form onSubmit={submit} id="search">
        <Row>
            <Form.Control 
              id="input-text" 
              placeholder={text} 
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              />
            <Button 
              id="button" 
              type="submit"
            >
              {isLoading ? '...' : 'Search'}</Button>
        </Row>
      </Form>
      <p>{message}</p>
    </>
  )
}

export default SearchText
