import Container from "../components/Container";
import DataTable from "../components/Table";
import { GridColDef } from '@mui/x-data-grid';
import {  Button, Chip, TextField } from "@mui/material";
import { Tittle } from "../components/Container/Container.Styles";
import { Form } from "../components/Form/Form.Styles";
import axios from "axios";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: 'titulo_escala', headerName: 'Título', type: 'string', width: 200 },
  { field: 'prefixo_posto', headerName: 'Posto', type: 'string', width: 150 },
  { field: 'inicio', headerName: 'Início', type: 'date', width: 110 },
  { field: 'termino', headerName: 'Término', type: 'date', width: 110 },
  { field: 'local', headerName: 'Local', type: 'string', width: 200 },
  { field: 'observacao', headerName: 'Observação', type: 'string', width: 100 },
  { 
    field: 'situacao', 
      headerName: 'Situação' ,
    renderCell: (params) => (
      <Chip label={params.value.name} variant="outlined" color={params.value.color} />
    ),
    width: 130,
   },
];

type InputEscala = {
  inicio: string;
  termino: string;
}

function Escalas() {
  const [rows, setRows] = useState([])

  async function getEscalas(date: InputEscala) {
    await axios.post(`https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/api/minhas_escalas`, date,
      {
        headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
      }
      }).then(res => {

        const c = res.data.data

        const rows = c.map(item => ({
          internalId: Math.random(),
          titulo_escala: item.titulo_escala, 
          prefixo_posto: item.prefixo_posto,
          inicio: item.inicio,
          termino: item.termino,
          local: item.local,
          observacao: item.observacao,
          situacao: {name: item.situacao, color:'primary'},
        }))

        setRows(rows)

      }).catch(err => {
        console.log(err)
      })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const date = {
      inicio: `${data.get('inicio')}`,
      termino: `${data.get('termino')}`
    }
    await getEscalas(date)
  }
  
  return (
    <Container title="Escalas">
      <Tittle>Minhas Escalas</Tittle>
        <Form onSubmit={handleSubmit}>
              <TextField
                name="inicio"
                label="Início"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
              />
              <TextField
                name="termino"
                label="Término"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
              />
              <Button
                type="submit"
                variant="contained"
              >
                Consultar
              </Button>
        </Form>
      <DataTable columns={columns} rows={rows}  />
    </Container>
  );
}

export default Escalas;


