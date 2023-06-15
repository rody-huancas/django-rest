import axios from 'axios'

const generoApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/movies/"
})

export const getAllGeneros = () => generoApi.get('/');
export const getGenero = (id) => generoApi.get(`/${id}/`);
export const createGenero = (genero) => generoApi.post('/', genero);
export const updateGenero = (id, genero) => generoApi.put(`/${id}/`, genero);
export const deleteGenero = (id) => generoApi.delete(`/${id}`);

