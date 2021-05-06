import axios from 'axios';

// Base URL = https://api-marketech-connection.herokuapp.com/
// api/shop ( Todos os associados )

const api = axios.create({
    baseURL: 'https://api-marketech-connection.herokuapp.com'
})

export default api;