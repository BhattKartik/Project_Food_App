import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import "./loginCSS.css"

const Login = () => {

function checkLogin(){

  
}





  return (
    <Container className='outerMainDiv d-flex justify-content-center align-items-center vh-100'>

      <div className="mainDiv">

        <Form>
          <h2 className="title">Login</h2>

          <Form.Group controlId='email' className='mb-3'>
            <Form.Control 
              type='email' 
              placeholder='Enter your email'
            />
          </Form.Group>

          <Form.Group controlId='password' className='mb-3'>
            <Form.Control 
              type='password' 
              placeholder='Enter your password'
            />
          </Form.Group>

          <Button variant='primary' className='w-100'>
            Login
          </Button>
        </Form>

      </div>

    </Container>
  )
}

export default Login