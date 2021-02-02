import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { registerUser } from '../store/action'

const Login = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm()

  async function submitForm(data) {
    try {
      const body = {
        fullname: data.fullname,
        username: data.username,
        password: data.password
      }
      console.log(body, 'masuk dari frontend login.js')
      await dispatch(registerUser(body))
      history.push('/')
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Group controlId="formBasicFullname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control name='fullname' type="text" placeholder="Enter full name" ref={register({ required: 'Please input full name' })} />
          { errors.fullname && <p style={{ color: 'red' }}>{errors.fullname.message}</p>}
        </Form.Group>
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
          Register
        </Button>
        <Link to='/'>
          <Button>Login</Button>
        </Link>
      </Form>
    </div>
  )
}

export default Login