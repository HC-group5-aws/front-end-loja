import React, { FC, useEffect, useState } from 'react'
import { FiDelete, FiPlus, FiThumbsUp, FiCheck, FiEdit } from 'react-icons/fi'

import './AdminLeads.css'

import api from './service/api'

interface LeadProps {
  ID: string
  name: string
  type: string
  fone: string
}

const AdminLeads: FC = () => {
  const [leads, setLeads] = useState<LeadProps[]>()
  // const [isEdit, setIsEdit] = useState(false)

  function handleDeleteLead(email: string) {

    var axios = require("axios").default;

    var options = {
      method: 'DELETE',
      url: 'https://2gvyucmlid.execute-api.sa-east-1.amazonaws.com/prod/lead',
      headers: { 'Content-Type': 'application/json', header1: 'stevanato_fredz@hotmail.com' }
    };

    axios.request(options).then(function (response: { data: any }) {
      console.log(response.data);
    }).catch(function (error: any) {
      console.error(error);
    });
  }

  useEffect(() => {
    async function getLeads() {
      const all = await api.get('/lead').then((response) => response.data.body) as LeadProps[]
      setLeads(all)
    }

    getLeads()
  }, [])

  return (
    <div>
      <table>
        <caption>
          Prospecção
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {leads?.map((lead) => (
              <tr key={lead.ID}>
                <td>{lead.name}</td>
                <td>{lead.ID}</td>
                <td>{lead.fone}</td>
                <td className="status">
                  {lead.type === 'prospect' ? (
                    <span>
                      <FiThumbsUp />
                    </span>
                  ) : (
                    <span className="lead">
                      <FiCheck />
                    </span>
                  )}
                </td>
                <td>
                  <button>{<FiPlus />}</button>
                  <button>{<FiEdit />}</button>
                  <button onClick={() => handleDeleteLead(lead.ID)}>{<FiDelete />}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </caption>
      </table>
    </div>
  )
}

export default AdminLeads
