import axios from 'axios'

const axiosUser = axios.create({
  baseURL: 'http://localhost:3000'
})

export default axiosUser