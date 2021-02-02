import axiosUser from '../config/axios'
import { FETCH_USER, LOGIN_USER, REGISTER_USER } from './actionTypes'

export const login = (dataLogin) => {
  console.log(dataLogin, 'masuk dari action')
  return dispatch => {
    axiosUser({
      method: 'post',
      url: '/login',
      data: { username: dataLogin.username, password: dataLogin.password }
    })
      .then(({ data }) => {
        console.log(data, 'masuk dari login action');
        localStorage.setItem('token', data.token)
        dispatch({
          type: LOGIN_USER,
          payload: { token: data.token, user: data.payload }
        })
        // console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const registerUser = (dataRegister) => {
  console.log(dataRegister, 'masuk dari action')
  return dispatch => {
    axiosUser({
      method: 'post',
      url: '/register',
      data: { fullname: dataRegister.fullname, username: dataRegister.username, password: dataRegister.password }
    })
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const fetchUserById = (payload) => {
  console.log(payload, 'masuk dari fetchuserbyid')
  return dispatch => {
    axiosUser({
      method: 'get',
      url: `/${payload}`,
      headers: { token: localStorage.getItem('token') }
    })
      .then(({ data }) => {
        // console.log(data, 'masuk')
        dispatch({
          type: FETCH_USER,
          payload: data.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const deleteUser = (payload) => {
  return dispatch => {
    axiosUser({
      method: 'delete',
      url: `/${payload}`,
      headers: { token: localStorage.getItem('token') }
    })
      .then(() => {
        console.log('success')
      })
      .catch(err => {
        console.log(err);
      })
  }
}