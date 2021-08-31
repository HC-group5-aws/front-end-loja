import axios from 'axios'

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const api = axios.create({
  baseURL: 'https://2gvyucmlid.execute-api.sa-east-1.amazonaws.com/prod',
})

export default api
