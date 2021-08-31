import axios from 'axios'

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const apiVtex = axios.create({
  baseURL: 'https://vtexapi2--hiringcoders202105.myvtex.com/',
})

export default apiVtex
