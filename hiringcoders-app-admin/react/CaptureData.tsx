import React, { FormEvent, useState } from 'react'
import './styles/vtex.capture-data.css'
import { Layout, PageBlock } from 'vtex.styleguide'


import api from './service/api'

const CaptureData: StorefrontFunctionComponent = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [fone, setFone] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    await api.post('/lead', {
      name,
      email,
      fone,
    })

    event.preventDefault()
  }

  return (
    <Layout>
      <PageBlock
        title="Se cadastre e ganhe"
        subtitle="Ganhe $ 100 bonus em serviços"
        variation="full"
      >
        <div className="container">
          <img src="https://th.bing.com/th/id/R.bf063e17dc6f7a91b02714863481ac83?rik=f1GLlasFjUCu%2fQ&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2016%2f10%2fAmazon-Logo.png&ehk=gLJu7Bd3zSqjAJ7OwoyQkQPaz6ofAdahYh91trMVyN0%3d&risl=&pid=ImgRaw&r=0" alt="amazon-logo" />
          <form className="formContainer" onSubmit={handleSubmit}>
            <h2 className="title">Fazer cadastro</h2>
            <label htmlFor="email" >
              Email
              <input
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            <label htmlFor="name">
              Nome Completo
              <input
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>

            <label htmlFor="fone">
              Telefone
              <input
                name="fone"
                type="text"
                value={fone}
                onChange={(event) => setFone(event.target.value)}
              />
            </label>

            <button>Enviar</button>
          </form>
        </div>
      </PageBlock>
    </Layout>

  )
}

export default CaptureData