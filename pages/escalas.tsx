import type { NextPage } from "next";
import Container from "../components/Container";
import DataTable from "../components/Table";
import { GridColDef } from '@mui/x-data-grid';
import { Chip } from "@mui/material";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Código', type: 'number', width: 70 },
  { field: 'unit', headerName: 'Unidade',  type: 'string', width: 100 },
  { field: 'type', headerName: 'Tipo',  type: 'string', width: 250 },
  { field: 'startDate', headerName: 'Data', type:'date', width: 130 },
  { field: 'time', headerName: 'Duração',  type: 'dateTime', width: 70 },
  { field: 'obs', headerName: 'Observação',  type: 'dateTime', width: 200 },
  { 
    field: 'situation', 
    headerName: 'Situação' ,
    renderCell: (params) => (
      <Chip label={params.value.name} variant="outlined" color={params.value.color} />
    ),
    width: 130,
     
    }
];

const data = new Date()

const rows = [
  { 
    id: 1, 
    unit:'CPC',
    type:'ORDINÁRIA',
    startDate: new Date(),
    time: data.getHours(),
    situation:{ name:'Fiscalizada', color: 'success'},
  },
  { 
    id: 5, 
    unit:'CPC',
    type:'ORDINÁRIA',
    startDate: new Date(),
    time: data.getHours(),
    situation:{ name:'Fiscalizada', color: 'success'}, 
  },
  {
    id: 2, 
    unit:'CPC',
    type:'ORDINÁRIA',
    startDate: new Date(),
    time: data.getHours(),
    situation:{ name:'Concluída', color: 'info'},
  },
  { 
    id: 3, 
    unit:'CPC',
    type:'ORDINÁRIA',
    startDate: new Date(),
    time: data.getHours(),
    situation:{ name:'Digitando', color: 'error'},
   },  
   { 
     id: 4, 
     unit:'4º BPM',
     type:'ORDINÁRIA',
     startDate: new Date(),
     time: data.getHours(),
     situation:{ name:'Fiscalizada', color: 'success'},

    },
    {
      id: 6, 
      unit:'11º BPM',
      type:'ESPECIAL',
      startDate: new Date(),
      time: data.getHours(),
      situation:{ name:'Concluída', color: 'info'}
    },
    { 
      id: 7, 
      unit:'2º BPM',
      type:'EXTRAORDINÁRIA',
      startDate: new Date(),
      time: data.getHours(),
      situation:{ name:'Digitando', color: 'error'},
     },  
     { 
       id: 8, 
       unit:'4º BPM',
       type:'EXTRAORDINÁRIA',
       startDate: new Date(),
       time: data.getHours(),
       situation:{ name:'Fiscalizada', color: 'success'},
      },
];
const Escalas: NextPage = () => {
  return (
    <Container title="Escalas">
      <div>
        <DataTable columns={columns} rows={rows} />
      </div>
    </Container>
  );
};

export default Escalas;
