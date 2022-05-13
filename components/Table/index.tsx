import * as React from 'react';
import { 
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
  ptBR} from '@mui/x-data-grid';
interface IParams {
  columns: GridColDef[],
  rows: {}[]

}

export default function DataTable({columns, rows}:IParams) {
  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        disableSelectionOnClick
        rows={rows}
        columns={columns}
        autoHeight
        pageSize={10}
        getRowId={(row) => row.id}
        rowsPerPageOptions={[10]}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  );
}
