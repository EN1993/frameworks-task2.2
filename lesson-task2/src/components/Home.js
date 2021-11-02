import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'

function Home() {
  return (
    <>
      <Navbar bg="light" expand="lg">
  
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      
        <Form inline>
          <Form.Control type="search" placeholder="Search" className="mr-me-2" />
            
        </Form>
    
      </Navbar>
    </>
  )
}

export default Home
