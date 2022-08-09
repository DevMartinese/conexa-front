const axios = require('axios');

const clientAxios = axios.create({
  baseURL: 'http://localhost:4000/conexa/'
});

export default clientAxios;