import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  ptBR
} from '@mui/x-data-grid';
import * as React from 'react';
import { useState } from "react";
import { TextModal } from "./Table.Styles";

interface IParams {
  columns: GridColDef[],
  rows: {}[]
}

interface Escala {
  titulo_escala: string,
  local: string,
  prefixo_posto: string,
  inicio: string,
  termino: string,  
  situacao: {name:string},
  observacao: string
}

export default function DataTable({columns, rows}:IParams) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Escala>()

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCellOpen = (params: GridCellParams) => {
    setOpen(true)
    const response = params.row
    setValues(response)
  }
  console.log(values)
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
        <TextModal><span>Título:</span> {values?.titulo_escala}</TextModal>
        <TextModal><span>Posto:</span> {values?.prefixo_posto}</TextModal>
        <TextModal><span>Local:</span> {values?.local}</TextModal>
        <TextModal><span>Início:</span> {values?.inicio}</TextModal>
        <TextModal><span>Término:</span> {values?.termino}</TextModal>
        <TextModal><span>Situação:</span> {values?.situacao.name}</TextModal>
        <TextModal><span>Observação:</span> {values?.observacao}</TextModal>
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
