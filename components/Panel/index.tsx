import Card from '@mui/material/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { HeaderPanel, CardContent, CardPanel, Container, TextCard } from './Panel.styles';

// interface Perfil {
//   usuario_nome_guerra: string,
//   usuario_matricula: number,
//   usuario_cpf: number,
//   usuario_titulo: string
// }

export default function Panel(){

  useEffect(() => {
    loadUser()
  }, [])

  const [users, SetUsers] = useState<any[]>([])

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
  } catch (err){
    console.log(err) 
  } 
  }


  return (
  <Container>
    <HeaderPanel>Informações Pessoais</HeaderPanel><CardPanel>
        <Card sx={{ maxWidth: 1200 }}>
          <CardContent>
            <>
              <TextCard>
                Nome de Guerra: {users.usuario_nome_guerra}
              </TextCard>
              <TextCard>
                Matrícula: {users.usuario_matricula}
              </TextCard>
              <TextCard>
                CPF: {users.usuario_cpf}
              </TextCard>
              <TextCard>
                Graduação: {users.usuario_titulo}
              </TextCard>
            </>
          </CardContent>
        </Card>
      </CardPanel>
    </Container>
  );
}