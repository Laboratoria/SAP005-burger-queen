import axios from 'axios';

// Criar uma baseURL para não precisarmos digitar em cada requisição o endereço do servidor, informando apenas a rota e seus parâmetros.
const api = axios.create({
    baseURL: 'lab-api-bq.herokuapp.com/',
});

export default api;