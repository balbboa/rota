import * as React from 'react';
import { 
  DataGrid,
  GridCellParams,
  GridColDef,
  ptBR
} from '@mui/x-data-grid';

import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle 
} from "@mui/material";
interface IParams {
  columns: GridColDef[],
  rows: {}[]
}


export default function DataTable({columns, rows}:IParams) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCellOpen = (params: GridCellParams) => {
    setOpen(true)
    // console.log(params.row)
    const response =
      `Título: ${params.row.titulo_escala} 
      Local: ${params.row.local}  
      Posto: ${params.row.prefixo_posto} 
      Início: ${params.row.inicio}
      Término: ${params.row.termino}
      Situacao: ${params.row.situacao.name}
      Observação: ${params.row.observacao} 
      `    
    setValues(response)
  }

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
        onCellClick ={handleCellOpen}
      />
      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'Detalhes'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {values}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Voltar
        </Button>
      </DialogActions>
    </Dialog>
    </div>
  );
}
