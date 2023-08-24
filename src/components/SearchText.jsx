import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './SearchText.css'
import React, { useState } from 'react'
import { search } from '../api/api'

const SearchText = ({ text, endpoint, set }) => {
  // State to store the value entered in the search input
  const [searchValue, setSearchValue] = useState('')

  // Function to handle form submission when search button is clicked
  async function submit(event) {
    event.preventDefault()
    // Fetch data from the server using the search API and update state
    const data = await search(endpoint, searchValue)
    set(data)
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
            <Button id="button" type="submit">Search</Button>
        </Row>
      </Form>
    </>
  )
}

export default SearchText
