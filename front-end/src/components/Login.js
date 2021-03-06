import React, { useState } from 'react'
import axios from 'axios'
import { setToken } from '../helpers/auth'
import { useNavigate } from 'react-router-dom'
// import { login } from '../helpers/api'
// import { getAxiosRequestConfig } from '../helpers/api'
import FormInput from '../components/FormInput'
import Form from 'react-bootstrap/Form'


const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)

  // const handleSuccessfulLogin = ({ token }) => {
  //   setToken(token)
  //   setIsLoggedIn(true)
  //   setIsError(false)
  //   navigate('/')
  // }

  // const handleSubmit = async (event) => {
  //   event.preventDefault()

  //   login(data).then(handleSuccessfulLogin).catch(handleError)

  // }

  const handleSubmit = async (event) => {
    event.preventDefault()
        
    const config = {
      method: 'post',
      url: 'http://localhost:8000/api/auth/login/',
      headers: { 
        'Content-Type': 'application/json',
      },
      data: data,
    }
    
    try {
      const response = await axios(config).catch(handleError)
      console.log(response.data.token)
      setToken(response.data.token)
      setIsLoggedIn(true)
      setIsError(false)
      navigate('/')
    } catch (err) {
      console.log(err)
      setIsError(true)
    }
  }

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <div className="form-section">
      <div className="form-box">
        <h1>Sign in to Shop</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FormInput 
              placeholder="email@email.com" 
              type='text'
              name='email' 
              {...formInputProps}  />
            <FormInput 
              placeholder='password' 
              type='password'
              name='password' 
              {...formInputProps} />
            <Form.Control type='submit' value='login' />
            {isError ? (
              <div className='error'>
                <p>Error. Please try again.</p>
              </div> 
            ) : (
              <></>
            )}
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default Login
