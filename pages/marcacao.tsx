import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import axios from "axios";
import * as React from 'react';
import Container from "../components/Container";
import { Tittle } from '../components/Container/Container.Styles';
import { Form } from "../components/Form/Form.Styles";
import DataTable2 from "../components/TableMarcacaoDO";
import { AgreeSpan, CustomDiv } from "../components/TableMarcacaoDO/TableMarcacaoDO.Styles";
import withAuth from '../utils/withAuth';

type InputMarcacao = {
  inicio: string;
  termino: string;
  unidade: string;
}

function Marcacao() {
  const [rows, setRows] = React.useState<any>([])
  const [erro, setErro] = React.useState<any>()
  const [state, setState] = React.useState<boolean>()
  const [open, setOpen] = React.useState(false);
  const [btnDisabled, setBtnDisabled] = React.useState(true)
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setBtnDisabled(true);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Ord.', type: 'number', minWidth: 40, flex:1 },
    { field: 'unit', headerName: 'Unidade', type: 'string', minWidth: 300, flex:1 },
    { field: 'startDate', headerName: 'Início', type: 'dateTime', minWidth: 160, flex:1 },
    { field: 'endDate', headerName: 'Término', type: 'dateTime', minWidth: 160, flex:1 },
    { field: 'local', headerName: 'Local', type: 'string', minWidth: 300, flex:1 },
    { field: 'funcao', headerName: 'Função', type: 'string', minWidth: 100, flex:1 },
    {
      field: 'acao',
      headerName: 'Ação', flex:1, minWidth: 100,
      renderCell: (params: GridRenderCellParams<Date>) => (
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
        >
          Marcar
        </Button>
      ),
    }
  ];

  const rows1 = [
    {
      id: 1,
      unit: 'CPC',
      startDate: new Date(),
      qtd: 2,
    },

    {
      id: 2,
      unit: 'CPC',
      startDate: new Date(),
      qtd: 2,
    },

    {
      id: 3,
      unit: '1º BPM',
      startDate: new Date(),
      qtd: 2,
    },
  ];

  async function getMarcacao(date: InputMarcacao) {
    await axios.post(`https://treinamento.rota.pm.rn.gov.br/api/minhas_escalas`, date,
      {
        headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
      }
      }).then(res => {

        const c = res.data.data

        const rows = c
          .map(item => {

          return ({
          id: Math.random(),
          unidade: item.unidade, 
          prefixo: item.prefixo,
          inicio: item.inicio,
          termino: item.termino,
          local: item.local, 
          funcao: item.funcao,
      
        })})

        sessionStorage.setItem('marcacao', JSON.stringify(rows))

        setRows(rows)
        setState(true)
        
      })}

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const date = {
      inicio: `${data.get('inicio')}`,
      termino: `${data.get('termino')}`,
      unidade: `${data.get('unidade')}`
    }
        
    sessionStorage.setItem('saveInitDate-Marcacao', date.inicio)
    sessionStorage.setItem('saveFinalDate-Marcacao', date.termino)
    
    await getMarcacao(date)
  }

  const curr = new Date();
  curr.setDate(curr.getDate())
  const today = curr.toLocaleDateString('en-CA');
  let startDate 
  let finalDate
    try{
      const previewStart =  sessionStorage.getItem('saveInitDate-Marcacao')
      const previewFinal =  sessionStorage.getItem('saveFinalDate-Marcacao')

      startDate = previewStart ? previewStart : today
      finalDate = previewFinal ? previewFinal : today
    }
    catch {
      startDate =  today
      finalDate =  today
    }
  
  let hour = curr.getHours();
  // let string1 = [ "eu concordo", "estou ciente", "estou de acordo"]
  let string1 = 'eu concordo'  

  return (
    <Container title="Marcação de DO">
      <Tittle>Marcação de Diárias Operacionais</Tittle>

      <Form onSubmit={handleSubmit}>
              <TextField
                name="inicio"
                label="Início"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                defaultValue={startDate}
              />
              <TextField
                name="termino"
                label="Término"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                defaultValue={finalDate}
              />
              <TextField
                name="unidade"
                label="Unidade"
                placeholder="Unidade"
                InputLabelProps={{ shrink: true }}
                type="search"
              />
              <Button
                type="submit"
                variant="contained"
              >
                Consultar
              </Button>
        </Form>
        {state == false ? (
          <Alert sx={{ my : 2}} variant="filled" severity="error">{erro?.msg}{erro?.Mensagem}</Alert>
          ) : (null)
        }
      <CustomDiv>
        <DataTable2 columns={columns} rows={rows1} />
      </CustomDiv>
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
              if(e.target.value == string1){ setBtnDisabled(false) } 
              else{ setBtnDisabled(true) } 
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button disabled={btnDisabled} variant="contained" onClick={handleClose}>Confirmar</Button>
          <Button onClick={handleClose} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default withAuth(Marcacao);
