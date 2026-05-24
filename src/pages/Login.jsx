import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import "./loginCSS.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  let [formData,setFormData] = useState({
    email:"",
    password:""
  })

  function captureData(event){

    const {name,value} = event.target;

    setFormData({
      ...formData,
      [name]:value
    })
  }

function checkLogin(event){

  event.preventDefault();

  const {email,password} = formData;

  if(email === "admin@gmail.com" && password === "admin"){
    navigate("/home")
    
  }
  else{
    alert("Invalid Credentiaal")
  }


}

  return (
    <Container className='outerMainDiv d-flex justify-content-center align-items-center vh-100'>

      <div className="mainDiv">

        <Form onSubmit={checkLogin}>
          <h2 className="title">Login</h2>

          <Form.Group controlId='email' className='mb-3'>
            <Form.Control 
              type='email' 
              placeholder='Enter your email'
              name='email'
              value={formData.email}
              onChange={captureData}
            />
          </Form.Group>

          <Form.Group controlId='password' className='mb-3'>
            <Form.Control 
              type='password' 
              placeholder='Enter your password'
              name='password'
              value={formData.password}
              onChange={captureData}
            />
          </Form.Group>

          <Button type='submit' variant='primary' className='w-100'>
            Login
          </Button>
        </Form>

      </div>

    </Container>
  )
}

export default Login