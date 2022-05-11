import Container from "../components/Container";
import DataTable from "../components/Table";
import { GridColDef } from '@mui/x-data-grid';
import { Alert, Button, Chip, TextField } from "@mui/material";
import { Tittle } from "../components/Container/Container.Styles";
import axios from "axios";
import { useState } from "react";
import { Form } from "../components/Form/Form.Styles";

const columns: GridColDef[] = [
  { field: 'titulo_escala', headerName: 'Título', type: 'string', width: 200 },
  { field: 'prefixo_posto', headerName: 'Posto', type: 'string', width: 150 },
  { field: 'inicio_posto', headerName: 'Início', type: 'date', width: 110 },
  { field: 'termino_posto', headerName: 'Término', type: 'date', width: 110 },
  { field: 'valor_vale_refeicao', headerName: 'Valor', type: 'string', width: 80 },
  { field: 'observacao', headerName: 'Observação', type: 'string', width: 180 },
  { 
    field: 'situacao_vale', 
      headerName: 'Situação' ,
    renderCell: (params) => (
      <Chip label={params.value.name} variant="outlined" color={params.value.color} />
    ),
    width: 130,
   },
];

type InputVale = {
  inicio: string;
  termino: string;
}

function Vales() {
  const [rows, setRows] = useState([])
  const [erro, setErro] = useState<any>()
  const [state, setState] = useState<boolean>()


  async function getVales(date: InputVale) {
    await axios.post(`https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/api/meus_vales`, date,
      {
        headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
      }
      }).then(res => {

        const k = res.data.data

        const rows = k.map(item => ({
          id: Math.random(),
          titulo_escala: item.titulo_escala, 
          prefixo_posto: item.prefixo_posto,
          inicio_posto: item.inicio_posto,
          termino_posto: item.termino_posto,
          valor_vale_refeicao: item.valor_vale_refeicao,
          observacao: item.observacao,
          situacao_vale: {name: item.situacao_vale, color:'primary'},
        }))

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
    await getVales(date)
  }

  return (
    <Container title="Meus Vales">
      <Tittle>Meus Vales</Tittle>
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

      <DataTable columns={columns} rows={rows} />

      {state == false ? (
        <Alert sx={{ mt : 2}} variant="filled" severity="error">{erro?.msg}</Alert>
        ) : (null)
      }
    </Container>
  );
}

export default Vales;


