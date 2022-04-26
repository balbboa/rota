import type { NextPage } from "next";
import Container from "../components/Container";
import DataTable from "../components/Table";
import { GridColDef } from '@mui/x-data-grid';
import { Chip } from "@mui/material";


const columns: GridColDef[] = [
  { field: 'id', headerName: 'Código', type: 'number', width: 70 },
  { field: 'unit', headerName: 'UNIDADE',  type: 'string', width: 100 },
  { field: 'title', headerName: 'Titulo',  type: 'string', width: 300 },
  { field: 'startDate', headerName: 'Data', type:'date', width: 130 },
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
    unit:'CPC',
    title:'REMESSA JAN/2022',
    startDate: new Date(),
    time: data.getHours(),
    situation:{ name:'Paga', color: 'success'},
    color:'success',
    value: 'R$214,80' 
  },
  { 
    id: 5, 
    unit:'CPC',
    title:'REMESSA COMPLEMENTAR Nº 35020',
    startDate: new Date(),
    time: data.getHours(),
    situation:{ name:'Paga', color: 'success'},
    value: 'R$107,40' 
  },
  {
    id: 2, 
    unit:'CPC',
    title:'REMESSA FEV/2022',
    startDate: new Date(),
    time: data.getHours(),
    situation:{ name:'Gerada', color: 'info'},
    value: 'R$322,20' 
  },
  { 
    id: 3, 
    unit:'CPC',
    title:'REMESSA FEV/2022',
    startDate: new Date(),
    time: data.getHours(),
    situation:{ name:'Digitando', color: 'error'},
    value: 'R$214,80'
   },  
   { 
     id: 4, 
     unit:'4º BPM',
     title:'REMESSA MAR/2022',
     startDate: new Date(),
     time: data.getHours(),
     situation:{ name:'Gerada', color: 'info'},
     value: 'R$214,80' 
    },
    {
      id: 6, 
      unit:'11º BPM',
      title:'REMESSA MAR/2022',
      startDate: new Date(),
      time: data.getHours(),
      situation:{ name:'Paga', color: 'success'},
      value: 'R$214,80' 
    },
    { 
      id: 7, 
      unit:'CPC',
      title:'REMESSA COMPLEMENTAR Nº 35025',
      startDate: new Date(),
      time: data.getHours(),
      situation:{ name:'Gerada', color: 'info'},
      value: 'R$214,80'
     },  
     { 
       id: 8, 
       unit:'4º BPM',
       title:'REMESSA MAR/2022',
       startDate: new Date(),
       time: data.getHours(),
       situation:{ name:'Digitando', color: 'error'},
       value: 'R$214,80' 
      },
];

const Diarias: NextPage = () => {
  return (
    <Container title="Minhas Diárias">
       <div>
        <DataTable columns={columns} rows={rows} />
      </div>
    </Container>
  );
};

export default Diarias;
