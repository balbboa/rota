import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  TextField
} from "@mui/material";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  ptBR
} from '@mui/x-data-grid';
import { Check } from '@styled-icons/material';
import { Dangerous } from '@styled-icons/material/Dangerous';
import axios from "axios";
import Link from "next/link";
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
  const handleBClose = () => {
    setActive(false);
    setBtnDisabled(true)
  };

  let string1 = 'eu concordo'

  async function marcarDO() {
    await axios.post(`https://treinamento.rota.pm.rn.gov.br/api/minhas_escalas`,
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
        }
      }).then(res => {
        setState(true)
      })
  }

  const handleMarcar = async (e) => {
    setModalOk(true)
    await marcarDO()
  }

  const handleCloseMarcar = async (e) => {
    setModalOk(false)
  }

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
            {marcacao?.funcao ? (
              <>
                <TextModal><span>Ordem:</span> {marcacao?.ordem}</TextModal>
                <TextModal><span>Unidade:</span> {marcacao?.unidade}</TextModal>
                <TextModal><span>Início:</span> {marcacao?.inicio}</TextModal>
                <TextModal><span>Termino:</span> {marcacao?.termino}</TextModal>
                <TextModal><span>Local:</span> {marcacao?.local}</TextModal>
                <TextModal><span>Função:</span> {marcacao?.funcao}</TextModal>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleMarcar}
                >
                  Marcar
                </Button>
              </>
            ) : ('')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBOpen} autoFocus>
            Voltar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={active}
        onClose={handleBClose}
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
          <Button disabled={btnDisabled} variant="contained" onClick={handleMarcar}>Confirmar</Button>
          <Button onClick={handleBClose} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={modalOk}
        onClose={handleCloseMarcar}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
            justifyContent:'center'
          },
        }}
      >
        {state == false ? (<>
          <DialogTitle id="alert-dialog-title">
            {"Diária marcada com sucesso!"}
          </DialogTitle>
          <DialogContent>

            <Fab
              aria-label="save"
              sx={{
                color: 'success.main',
              }}
            >
              <Check />
            </Fab>

            {/* <Alert sx={{ my: 2 }} variant="filled" severity="error">{erro?.msg}{erro?.Mensagem}</Alert> */}

          </DialogContent>
        </>
        ) : (<>
          <DialogTitle id="alert-dialog-title">
            {"Ocorreu algum problema!"}
          </DialogTitle>
          <DialogContent>

            <Fab
              aria-label="save"
              sx={{
                color: 'error.main',
              }}
            >
              <Dangerous />
            </Fab>

            {/* <Alert sx={{ my: 2 }} variant="filled" severity="error">{erro?.msg}{erro?.Mensagem}</Alert> */}

          </DialogContent>
        </>
        )}
        <DialogActions>
          <Link href='/dashboard'>
            <Button autoFocus>
              Voltar
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
