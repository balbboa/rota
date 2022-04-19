import type { NextPage } from "next";
import Container from "../components/Container";
import DataTable from "../components/Table";
import { GridColDef, GridToolbar} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Código', type: 'number', width: 70 },
  { field: 'prefixo', headerName: 'Prefixo',  type: 'string', width: 70 },
  { field: 'title', headerName: 'Titulo',  type: 'string', width: 190 },
  { field: 'startDate', headerName: 'Data', type:'date', width: 130 },
  { field: 'time', headerName: 'Duração',  type: 'dateTime', width: 130 },
  { field: 'situation', headerName: 'Situação',  type: 'string', width: 130 },
  { field: 'value', headerName: 'Valor',  type: 'string', width: 130 },
];

const data = new Date()

const rows = [
  { id: 1, prefixo:'CPC', title:'Escala ORDINÁRIA Nº 35020', startDate: new Date(), time: data.getHours(), situation:'Fiscalizada', value: 'R$20,0' },
  // { id: 2, startDate: '14/11/1995',  time: 42 },
  // { id: 3, startDate: '14/11/1995',  time: 45 },
  // { id: 4, startDate: '14/11/1995',  time: 16 },
  // { id: 5, startDate: '14/11/1995',  time: 26 },
  // { id: 6, startDate: '14/11/1995',  time: 150 },
  // { id: 7, startDate: '14/11/1995',  time: 44 },
  
];

const Vales: NextPage = () => {
  return (
    <Container title="Meus Vales">
      <div>
        <DataTable columns={columns} rows={rows} />
      </div>
    </Container>
  );
};

export default Vales;
