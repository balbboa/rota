import Container from "../components/Container";
import DataTable from "../components/Table";
import { GridColDef } from '@mui/x-data-grid';
import { Alert, Button, Chip, TextField, Tooltip } from "@mui/material";
import { Tittle } from "../components/Container/Container.Styles";
import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { Form } from "../components/Form/Form.Styles";
import withAuth from "../utils/withAuth";
import { CustomSpan } from '../components/Table/Table.Styles'

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
  { field: 'observacao_diaria', 
  renderCell: (params : any) => (
    <Tooltip title={params.value}>
        <CustomSpan>{params.value}</CustomSpan>
    </Tooltip>
  ),
  headerName: 'Observação', type:'string', flex: 1 },
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

  useLayoutEffect(() => {
    const previewRows = sessionStorage.getItem('diaria')
    if (previewRows) {
      const parse = JSON.parse(previewRows)
      setRows(parse)
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('diaria', JSON.stringify(rows))
  }, [rows])

  async function getDiarias(date: InputDiarias) {
    await axios.post(`https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/api/minhas_diarias`, date,
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
    await getDiarias(date)
  }

  const curr = new Date();
  curr.setDate(curr.getDate())
  const date = curr.toLocaleDateString('en-CA');

  return (
    <Container title="Minhas Diárias">
      <Tittle>Minhas Diárias</Tittle>

      <Form onSubmit={handleSubmit}>
              <TextField
                name="inicio"
                label="Início"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                defaultValue={date}
              />
              <TextField
                name="termino"
                label="Término"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                defaultValue={date}
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
