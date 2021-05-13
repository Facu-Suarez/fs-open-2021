import axios from 'axios'
const baseURL = 'http://localhost:3001/persons';


export const getData = () =>{
    const request = axios.get(baseURL)
    return request.then(reponse => reponse.data)
}