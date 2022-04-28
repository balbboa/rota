import type { NextPage } from "next";
import Container from "../components/Container";
import DataTable from "../components/Table";
import { GridColDef } from '@mui/x-data-grid';
import Alert from "@mui/material/Alert";
import { Chip } from "@mui/material";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Código', type: 'number', width: 70 },
  { field: 'prefixo', headerName: 'Prefixo',  type: 'string', width: 100 },
  { field: 'title', headerName: 'Titulo',  type: 'string', width: 250 },
  { field: 'startDate', headerName: 'Data', type:'date', width: 130 },
  { field: 'time', headerName: 'Duração',  type: 'dateTime', width: 70 },
  { 
    field: 'situation', 
    headerName: 'Situação' ,
    renderCell: (params) => (
      <Chip label={params.value.name} variant="outlined" color={params.value.color} />
    ),
    width: 130,
     
    },
  { field: 'value', headerName: 'Valor',  type: 'string', width: 130 },
];

const data = new Date()

const rows = [
  { 
    id: 1, 
    prefixo:'CPC',
    title:'Escala ORDINÁRIA Nº 35020',
    startDate: new Date(),
    time: data.getHours(),
    situation:{ name:'Fiscalizada', color: 'success'},
    color:'success',
    value: 'R$20,0' 
  },
  { 
    id: 5, 
    prefixo:'CPC',
    title:'Escala ORDINÁRIA Nº 35020',
    startDate: new Date(),
    time: data.getHours(),
    situation:{ name:'Fiscalizada', color: 'success'},
    value: 'R$20,0' 
  },
  {
    id: 2, 
    prefixo:'CPC',
    title:'Escala ORDINÁRIA Nº 35022',
    startDate: new Date(),
    time: data.getHours(),
    situation:{ name:'Autorizada', color: 'info'},
    value: 'R$20,0' 
  },
  { 
    id: 3, 
    prefixo:'CPC',
    title:'Escala ORDINÁRIA Nº 35025',
    startDate: new Date(),
    time: data.getHours(),
    situation:{ name:'Digitando', color: 'error'},
    value: 'R$20,0'
   },  
   { 
     id: 4, 
     prefixo:'4º BPM',
     title:'Escala ORDINÁRIA Nº 35020',
     startDate: new Date(),
     time: data.getHours(),
     situation:{ name:'Fiscalizada', color: 'success'},
     value: 'R$20,0' 
    },
    {
      id: 6, 
      prefixo:'11º BPM',
      title:'Escala ORDINÁRIA Nº 35022',
      startDate: new Date(),
      time: data.getHours(),
      situation:{ name:'Autorizada', color: 'info'},
      value: 'R$20,0' 
    },
    { 
      id: 7, 
      prefixo:'CPC',
      title:'Escala ORDINÁRIA Nº 35025',
      startDate: new Date(),
      time: data.getHours(),
      situation:{ name:'Digitando', color: 'error'},
      value: 'R$20,0'
     },  
     { 
       id: 8, 
       prefixo:'4º BPM',
       title:'Escala ORDINÁRIA Nº 35020',
       startDate: new Date(),
       time: data.getHours(),
       situation:{ name:'Fiscalizada', color: 'success'},
       value: 'R$20,0' 
      },
];

const Vales: NextPage = () => {
  return (
    <Container title="Meus Vales">
      <DataTable columns={columns} rows={rows} />
    </Container>
  );
};

export default Vales;


