import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '35f9ae915039c4c6b9a291b7533878f7',
        language: 'pt-BR',
        page: 1
    }
})

export default api