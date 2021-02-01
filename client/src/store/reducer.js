import { LOGIN_USER, REGISTER_USER } from './actionTypes'

const defaultValue = {
  token: ''
}
const reducer = (state = defaultValue, action) => {
  console.log(action, 'masuk dari reducer')
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, token: payload }
    case REGISTER_USER:
      return { ...state, token: payload }
    default:
      return state
  }
}

export default reducer