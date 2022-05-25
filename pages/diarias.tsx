import { Alert, Button, Chip, TextField, Tooltip } from "@mui/material";
import { GridColDef } from '@mui/x-data-grid';
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import { Tittle } from "../components/Container/Container.Styles";
import { Form } from "../components/Form/Form.Styles";
import DataTable from "../components/Table";
import { CustomSpan } from '../components/Table/Table.Styles';
import withAuth from "../utils/withAuth";

const columns: GridColDef[] = [
  { field: 'titulo_escala', 
  renderCell: (params : any) => (
    <Tooltip title={params.value}>
        <CustomSpan>{params.value}</CustomSpan>
    </Tooltip>
  ),
  headerName: 'Título', type: 'string', minWidth: 230, flex: 1 },
  { field: 'data_diaria', headerName: 'Data',  type: 'string', minWidth: 135, flex: 1 },
  { field: 'valor_diaria', headerName: 'Valor',  type: 'string', minWidth: 80, flex: 1 },
  { 
    field: 'situacao_diaria', 
    headerName: 'Situação' ,
    renderCell: (params) => (
      <Chip label={params.value.name} variant="outlined" color={params.value.color} />
    ),
    minWidth: 105,
    flex: 1
    },
];

type InputDiarias = {
  inicio: string;
  termino: string;
}

function Diarias() {

  const [rows, setRows] = useState([])
  const [erro, setErro] = useState<any>()
  const [state, setState] = useState<boolean>()

  useEffect(() => {
    const previewRows = sessionStorage.getItem('diaria')
    if (previewRows) {
      const parse = JSON.parse(previewRows)
      setRows(parse)
    }
  }, [])

  async function getDiarias(date: InputDiarias) {
    await axios.post(`https://treinamento.rota.pm.rn.gov.br/api/minhas_diarias`, date,
      {
        headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
      }
      }).then(res => {

        const x = res.data.data
        const rows = x.map(item => {
          let color = 'info'
          if (item.situacao_diaria === 'Gerada') {
            color =  'primary'
          }
          if (item.situacao_diaria === 'Glosada') {
            color =  'error'
          }
          if (item.situacao_diaria === 'Incluída na Remessa') {
            color =  'warning'
          }
          if (item.situacao_diaria === 'Incluída no Pedido') {
            color =  'warning'
          }
          if (item.situacao_diaria === 'Paga pelo banco') {
            color =  'success'
          }
          return ({
          id: Math.random(),
          titulo_escala: item.titulo_escala, 
          data_diaria: item.data_diaria,
          valor_diaria: item.valor_diaria,
          observacao_diaria: item.observacao_diaria,
          situacao_diaria: {name: item.situacao_diaria, color},
        })})

        setRows(rows)
        setState(true)
        sessionStorage.setItem('diaria', JSON.stringify(rows))

      }).catch(err => {
        console.log(err.response.data)
        setErro(err.response.data)
        setState(false)
      })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const date = {
      inicio: `${data.get('inicio')}`,
      termino: `${data.get('termino')}`
    }
    sessionStorage.setItem('saveInitDate-Diaria', date.inicio)
    sessionStorage.setItem('saveFinalDate-Diaria', date.termino)
    await getDiarias(date)
  }

  const curr = new Date();
  curr.setDate(curr.getDate())
  const today = curr.toLocaleDateString('en-CA');
  let startDate 
  let finalDate
    try{
      const previewStart =  sessionStorage.getItem('saveInitDate-Diaria')
      const previewFinal =  sessionStorage.getItem('saveFinalDate-Diaria')

      startDate = previewStart ? previewStart : today
      finalDate = previewFinal ? previewFinal : today
    }
    catch {
      startDate =  today
      finalDate =  today
    }

  return (
    <Container title="Minhas Diárias">
      <Tittle>Minhas Diárias</Tittle>

      <Form onSubmit={handleSubmit}>
              <TextField
                name="inicio"
                label="Início"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                defaultValue={startDate}
              />
              <TextField
                name="termino"
                label="Término"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                defaultValue={finalDate}
              />
              <Button
                type="submit"
                variant="contained"
              >
                Consultar
              </Button>
        </Form>
      
      {state == false ? (
        <Alert sx={{ my : 2}} variant="filled" severity="error">{erro?.msg}{erro?.Mensagem}</Alert>
        ) : (null)
      }

      <DataTable columns={columns} rows={rows} />

    </Container>
  );
}

export default withAuth(Diarias);
