import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  ptBR
} from '@mui/x-data-grid';
import * as React from 'react';
import { useState } from "react";
import { AgreeSpan, TextModal } from "./Table.Styles";

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
  codigo: number,
  unidade: string,
  data_marcacao: string,
  quantidade: string,
  opcoes: string
}

export default function DataTable({ columns, rows }: IParams) {
  const [open, setOpen] = useState(false);
  const [escala, setEscala] = useState<Escala>()
  const [vale, setVale] = useState<Vale>()
  const [diaria, setDiaria] = useState<Diaria>()
  const [marcacao, setMarcacao] = useState<Marcacao>()
  const [btnDisabled, setBtnDisabled] = React.useState(true)
  const [active, setActive] = useState(false);


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

  const handleClickOpen = () => {
    setActive(true);
  };
  const handleBClose = () => {
    setActive(false);
    setBtnDisabled(true)
  };

  let string1 = 'eu concordo'

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
            {marcacao?.data_marcacao ? (
              <>
                <TextModal><span>Código:</span> {marcacao?.codigo}</TextModal>
                <TextModal><span>Unidade:</span> {marcacao?.unidade}</TextModal>
                <TextModal><span>Data e Hora:</span> {marcacao?.data_marcacao}</TextModal>
                <TextModal><span>Quantidade:</span> {marcacao?.quantidade}</TextModal>
                <TextModal><span>Opções:</span> {marcacao?.opcoes}</TextModal>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClickOpen}
                >
                  Marcar
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Requisitos Obrigatórios para Marcar esta Diária"}
                  </DialogTitle>
                  <DialogContent>
                    <h4>Termo de Condições e Responsabilidades</h4>
                    <DialogContentText id="alert-dialog-description">
                      <ul>
                        <li>A diária operacional é de caráter voluntário, contudo, após confirmar sua voluntariedade para o serviço, o agente ficará na responsabilidade para o cumprimento, podendo este, na sua ausência, trazer prejuízo ao serviço.</li>
                        <li>O voluntário deverá apresentar-se ao serviço no local e horário informado, com o Uniforme e equipamentos adequados.</li>
                        <li>É de responsabilidade do voluntário verificar no sistema RotaWeb (menu Minhas Escalas) se não há nenhum choque de horário entre os serviços, para o qual foi escalado, fiscalizado ou voluntário, e informar, o mais breve possível, alterações que o mesmo identificar à administração da sua Unidade.</li>
                        <li>O voluntário ao marcar uma Diária Opercional no sistema RotaWeb declara estar ciente dos requisitos exigidos para o serviço e que atende os mesmos sem ressalvas.</li>
                        <li>O voluntário que deixar de participar, a tempo, via SEI, a impossibilidade de comparecer ao serviço, faltar ou chegar atrasado, poderá sobre sanções previstas em lei.</li>
                        <li>Digite <AgreeSpan>{string1}</AgreeSpan> para prosseguir</li>
                      </ul>
                    </DialogContentText>
                    <TextField
                      fullWidth
                      name="termo"
                      label="Assinatura"
                      type="text"
                      onChange={(e) => {
                        if (e.target.value == string1) { setBtnDisabled(false) }
                        else { setBtnDisabled(true) }
                      }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button disabled={btnDisabled} variant="contained" onClick={handleBClose}>Confirmar</Button>
                    <Button onClick={handleBClose} autoFocus>
                      Cancelar
                    </Button>
                  </DialogActions>
                </Dialog>
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
