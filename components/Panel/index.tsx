import Card from '@mui/material/Card';
import { HeaderPanel, CardContent, CardPanel, Container, TextCard } from './Panel.styles';


export default function Panel(){
  return (
    <Container>
      <HeaderPanel>Informações Pessoais</HeaderPanel>
      <CardPanel>
        <Card sx={{ maxWidth: 1200 }}>
        <CardContent>
            <TextCard>
              Matricula: 239.061-5
            </TextCard>
            <TextCard>
              Nº de praça: 2015.0606
            </TextCard>
            <TextCard>
              Nome de guerra: Gabriel Brito            
            </TextCard>
            <TextCard>
              CPF: 133.163.794-52            
            </TextCard>
            <TextCard>
              Data Nasc.: 06/06/2015            
            </TextCard>
        </CardContent>
        </Card>
        </CardPanel>
    </Container>
  );
}
