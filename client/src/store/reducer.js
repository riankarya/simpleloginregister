import { LOGIN_USER, REGISTER_USER, FETCH_USER } from './actionTypes'

const defaultValue = {
  token: '',
  user: {}
}
const reducer = (state = defaultValue, action) => {
  console.log(action, 'masuk dari reducer')
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, token: action.payload.token, user: action.payload.user }
    case REGISTER_USER:
      return { ...state, token: action.payload.token }
    case FETCH_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export default reducer