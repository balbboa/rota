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
  situacao: { name: string },
  observacao: string
}

interface Vale {
  titulo_escala: string,
  prefixo_posto: string,
  inicio_posto: string,
  termino_posto: string,
  situacao_vale: { name: string },
  observacao: string,
  valor_vale_refeicao: string
}

interface Diaria {
  titulo_escala: string,
  data_diaria: string,
  observacao_diaria: string,
  situacao_diaria: { name: string },
  valor_diaria: string
}

interface Marcacao {
  ordem: number,
  unidade: string,
  inicio: string,
  termino: string,
  local: string,
  funcao: string
}

export default function DataTable({ columns, rows }: IParams) {
  const [open, setOpen] = useState(false);
  const [escala, setEscala] = useState<Escala>()
  const [vale, setVale] = useState<Vale>()
  const [diaria, setDiaria] = useState<Diaria>()
  const [marcacao, setMarcacao] = useState<Marcacao>()
  const [btnDisabled, setBtnDisabled] = React.useState(true)
  const [active, setActive] = useState(false);
  const [modalOk, setModalOk] = useState(false);
  const [state, setState] = useState<boolean>(false)

  const handleClose = () => {
    setOpen(false);
  };

  const handleCellOpen = (params: GridCellParams) => {
    setOpen(true)
    const response = params.row
    setEscala(response)
    setVale(response)
    setDiaria(response)
    setMarcacao(response)
  }

  const handleBOpen = () => {
    setActive(true);
  };

  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        disableSelectionOnClick={true}
        rows={rows}
        columns={columns}
        autoHeight
        pageSize={10}
        getRowId={(row) => row.id}
        rowsPerPageOptions={[10]}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        onCellClick={handleCellOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Detalhes'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {escala?.situacao ? (
              <>
                <TextModal><span>Título:</span> {escala?.titulo_escala}</TextModal>
                <TextModal><span>Posto:</span> {escala?.prefixo_posto}</TextModal>
                <TextModal><span>Local:</span> {escala?.local}</TextModal>
                <TextModal><span>Início:</span> {escala?.inicio}</TextModal>
                <TextModal><span>Término:</span> {escala?.termino}</TextModal>
                <TextModal><span>Situação:</span> {escala?.situacao.name}</TextModal>
                <TextModal><span>Observação:</span> {escala?.observacao}</TextModal>
              </>
            ) : ('')}
            {vale?.situacao_vale ? (
              <>
                <TextModal><span>Título:</span> {vale?.titulo_escala}</TextModal>
                <TextModal><span>Posto:</span> {vale?.prefixo_posto}</TextModal>
                <TextModal><span>Início:</span> {vale?.inicio_posto}</TextModal>
                <TextModal><span>Término:</span> {vale?.termino_posto}</TextModal>
                <TextModal><span>Valor:</span> {vale?.valor_vale_refeicao}</TextModal>
                <TextModal><span>Situação:</span> {vale?.situacao_vale.name}</TextModal>
                <TextModal><span>Observação:</span> {vale?.observacao}</TextModal>
              </>
            ) : ('')}
            {diaria?.situacao_diaria ? (
              <>
                <TextModal><span>Título:</span> {diaria?.titulo_escala}</TextModal>
                <TextModal><span>Data:</span> {diaria?.data_diaria}</TextModal>
                <TextModal><span>Valor:</span> {diaria?.valor_diaria}</TextModal>
                <TextModal><span>Situação:</span> {diaria?.situacao_diaria.name}</TextModal>
                <TextModal><span>Observação:</span> {diaria?.observacao_diaria}</TextModal>
              </>
            ) : ('')}
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
