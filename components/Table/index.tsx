import * as React from 'react';
import { 
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
  MAX_PAGE_SIZE,
  ptBR} from '@mui/x-data-grid';
interface IParams {
  columns: GridColDef[],
  rows: {}[]

}

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      {/* <GridToolbarDensitySelector />
      <GridToolbarExport /> */}
    </GridToolbarContainer>
  );
}

export default function DataTable({columns, rows}:IParams) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        disableSelectionOnClick
        rows={rows}
        columns={columns}
        autoHeight
        rowsPerPageOptions={[10]}
        components={{
          Toolbar: CustomToolbar,
        }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  );
}
