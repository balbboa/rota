import Card from '@mui/material/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { HeaderPanel, CardContent, CardPanel, Container, TextCard } from './Panel.styles';


export default function Panel(){

  useEffect(() => {
    loadUser()
  }, [])

  const [users, SetUsers] = useState<any[]>([])
  const [loading, SetLoading] = useState(false)

  const loadUser = async () => {
    try {
    const res = await axios.post(`https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/api/usuario`, '',
      {
        headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
        }
      })
      SetUsers(res.data.data)
      console.log(res.data.data)
      SetLoading(true) 
  } catch (err){
    console.log(err) 
  } 
  }

  return (
  <Container>
    <HeaderPanel>Informações Pessoais</HeaderPanel><CardPanel>
        <Card sx={{ maxWidth: 1200 }}>
          <CardContent>
            {loading && 
            users.map((user) => (
            <>
              <TextCard>
                {user.usuario_nome_guerra}
              </TextCard>
              <TextCard>
                {user.usuario_matricula}
              </TextCard>
              <TextCard>
                {user.usuario_cpf}
              </TextCard>
              <TextCard>
                {user.usuario_titulo}
              </TextCard>
            </>
            ))}
          </CardContent>
        </Card>
      </CardPanel>
    </Container>
  );
}