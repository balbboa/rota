import type { GetStaticProps } from "next";
import Container from "../components/Container";
import DataTable from "../components/Table";
import { GridColDef } from '@mui/x-data-grid';
import {  Button, Chip, TextField } from "@mui/material";
import { Tittle } from "../components/Container/Container.Styles";
import { Form } from "../components/Form/Form.Styles";

const columns: GridColDef[] = [
  { field: 'titulo_escala', headerName: 'Título', type: 'string', width: 70 },
  { field: 'prefixo_posto', headerName: 'Posto', type: 'string', width: 100 },
  { field: 'inicio', headerName: 'Início', type: 'date', width: 130 },
  { field: 'termino', headerName: 'Término', type: 'date', width: 130 },
  { field: 'local', headerName: 'Local', type: 'string', width: 130 },
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

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await fetch('https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/api/minhas_escalas', {method: 'post'})
//   const data = await response.json();

//   const rows = data.map(item => ({
//     titulo_escala: item.titulo_escala, 
//     prefixo_posto: item.prefixo_posto,
//     inicio: item.inicio,
//     termino: item.termino,
//     local: item.local,
//     observacao: item.observacao,
//     situacao: item.situacao,
//   }))

//   return{
//     props: {
//       escalas: rows,
//     }
//   }
// }

function Escalas({ escalas }) {

  return (
    <Container title="Escalas">
      <Tittle>Minhas Escalas</Tittle>
        <Form>
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
      {/* <DataTable columns={columns} rows={escalas} /> */}
    </Container>
  );
}

export default Escalas;
