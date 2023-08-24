import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './SearchText.css'
import React, { useState } from 'react'
import { STUDENTS } from '../api/endpoints'
import { search } from '../api/api'

const SearchText = ({ text, endpoint, set }) => {
  const [searchValue, setSearchValue] = useState('')

  async function submit(event) {
    event.preventDefault()
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
