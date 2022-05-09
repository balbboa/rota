import Card from '@mui/material/Card';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { loadUser } from '../../lib/getUser'
import { HeaderPanel, CardContent, CardPanel, Container, TextCard } from './Panel.styles';

export default function Panel({ dados }){
  console.log(dados)
  return (
  <Container>
    <HeaderPanel>Informações Pessoais</HeaderPanel><CardPanel>
        <Card sx={{ maxWidth: 1200 }}>
          <CardContent>
          {dados?.map((dado) => (
            <>
              <TextCard>
                {dado.usuario_nome_guerra}
              </TextCard><TextCard>
                {dado.usuario_matricula}
              </TextCard><TextCard>
                {dado.usuario_cpf}
              </TextCard><TextCard>
                {dado.usuario_titulo}
              </TextCard>
            </>
          ))}
          </CardContent>
        </Card>
      </CardPanel>
    </Container>
  );
}
  
export const getStaticProps: GetStaticProps = async (context) => {
  
  const dados = await loadUser()
  console.log('asdasd', dados)

  if (!dados) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      dados
    }
  }
}