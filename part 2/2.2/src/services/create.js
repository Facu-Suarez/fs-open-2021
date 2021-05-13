import axios from 'axios'
const baseURL = 'http://localhost:3001/persons';


export const create = ({name, num, id}) =>{
    const request = axios.post(baseURL,{name, num, id})
    return request.then(reponse => reponse.data)
}