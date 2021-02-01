import axiosUser from '../config/axios'
import { LOGIN_USER, REGISTER_USER } from './actionTypes'

export const login = (dataLogin) => {
  return dispatch => {
    axiosUser({
      method: 'post',
      url: '/login',
      data: { username: dataLogin.username, password: dataLogin.password }
    })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}