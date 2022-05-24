import {
  DataGrid, GridColDef,
  ptBR
} from '@mui/x-data-grid';
import * as React from 'react';

interface IParams {
  columns: GridColDef[],
  rows: {}[]
}

export default function DataTable2({columns, rows}:IParams) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <DataGrid
        disableSelectionOnClick={true}
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
