import axios from 'axios'

export async function loadUser() {
    const res = await axios.post(`https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/api/usuario`, '',
  {
    headers:{
    'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
    }
  }) 

    const data = await res.data.json()
    console.log(data)

    return data
  }