import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { login } from '../store/action'

const Login = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { token } = useSelector((state) => state)
  const { register, handleSubmit, errors } = useForm()

  useEffect(() => {
    if (localStorage.token) {
      history.push('/home')
    }
  }, [token])

  async function submitForm(data) {
    try {
      const body = {
        username: data.username,
        password: data.password
      }
      console.log(body, 'masuk dari client login.js')
      await dispatch(login(body))
      history.push('/home')
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control name='username' type="text" placeholder="Enter username" ref={register({ required: 'Please input username' })} />
          { errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Enter password" ref={register({ required: 'Please input password' })} />
          { errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Link to='/register'>
          <Button>Register</Button>
        </Link>
      </Form>
    </div>
  )
}

export default Login