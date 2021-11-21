import axios from 'axios'

const ApiAxios = axios.create ({
    // baseURL: 'https://api.tvmaze.com/search/shows?q=star%20wars',
    baseURL: 'https://api.tvmaze.com/search/shows?q=star%20wars', 
})

export default ApiAxios;

// lembrando que para Api funcionar é preciso instalar o Axios
// npm instal Comando abaixo:
// npm install -- save axios