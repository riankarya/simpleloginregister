const axios = require('axios')

const axiosUser = axios.create({
  baseURL: 'http://localhost:3000'
})

module.exports = { axiosUser }