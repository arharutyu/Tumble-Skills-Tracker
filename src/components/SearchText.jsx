import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './SearchText.css'

import React from 'react'

const SearchText = () => {
  let text = "Search for student"

  return (
    <>
      <Form id="search">
        <Row>
            <Form.Control id="input-text" placeholder={text} />
            <Button id="button" type="submit">Search</Button>
        </Row>
      </Form>
    </>
  )
}

export default SearchText
