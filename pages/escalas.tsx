import type { GetStaticProps } from "next";
import Container from "../components/Container";
import DataTable from "../components/Table";
import { GridColDef } from '@mui/x-data-grid';
import { Chip } from "@mui/material";
import { Tittle } from "../components/Container/Container.Styles";

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'Código', type: 'number', width: 70 },
//   { field: 'unit', headerName: 'Unidade',  type: 'string', width: 100 },
//   { field: 'type', headerName: 'Tipo',  type: 'string', width: 250 },
//   { field: 'startDate', headerName: 'Data', type:'date', width: 130 },
//   { field: 'time', headerName: 'Duração',  type: 'dateTime', width: 70 },
//   { field: 'obs', headerName: 'Observação',  type: 'dateTime', width: 200 },
//   { 
//     field: 'situation', 
//     headerName: 'Situação' ,
//     renderCell: (params) => (
//       <Chip label={params.value.name} variant="outlined" color={params.value.color} />
//     ),
//     width: 130,
     
//     }
// ];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Código', type: 'number', width: 130 },
  { field: 'name', headerName: 'Nome', type: 'string', width: 300 },
];

const data = new Date()

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/balbboa/repos')
  const data = await response.json();

  const rows = data.map(item => ({id: item.id, name: item.name}))

  return{
    props: {
      repositories: rows,
    }
  }
}


function Escalas({ repositories }) {

  return (
    <Container title="Escalas">
      <Tittle>Minhas Escalas</Tittle>
      <DataTable columns={columns} rows={repositories} />
    </Container>
  );
}

export default Escalas;
