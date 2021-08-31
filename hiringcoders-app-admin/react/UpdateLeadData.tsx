import React, { useEffect, useState } from 'react'
import api from './service/api'
var axios = require("axios").default;


//import { } from 'vtex.styleguide'

interface LeadProps {
  name: string
  ID: string
  type: string
  fone: string
  updated_at: string
}

const UpdateLeadData: StorefrontFunctionComponent = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function getUrl() {
      const response = await api.get(`https://stevanato--hiringcoders202105.myvtex.com/api/vtexid/pub/authenticated/user`)

      if (response.data.user) {
        setEmail(response.data.user)
        return
      }
    }
    getUrl()
  }, [email])

  useEffect(() => {
    async function sendEmailAws(email: string) {
      api.delete('/lead', {
        headers: { header1: "stevanato_fredez@hotmail.com" }
      })
    }

    sendEmailAws(email)
  }, [email])


  return (
    <div>
      <p>{email || 'Email não capturadado ->'}</p>
    </div>
  )
}

export default UpdateLeadData
