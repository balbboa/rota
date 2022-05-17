import { Alert, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Tooltip } from "@mui/material";
import { GridColDef } from '@mui/x-data-grid';
import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import Container from "../components/Container";
import { Tittle } from "../components/Container/Container.Styles";
import { Form } from "../components/Form/Form.Styles";
import DataTable from "../components/Table";
import { CustomSpan } from "../components/Table/Table.Styles";
import withAuth from "../utils/withAuth";

function Escalas() {

const [open, setOpen] = useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

const columns: GridColDef[] = [
  { field: 'titulo_escala', flex: 1, headerName: 'Título', 
  renderCell: (params : any) => (
    <Tooltip title={params.value}>
        <CustomSpan>{params.value}</CustomSpan>
    </Tooltip>
  ),
  type: 'string', minWidth: 230 },
  { field: 'prefixo_posto', flex: 1, headerName: 'Posto', 
  renderCell: (params : any) => (
    <Tooltip title={params.value}>
        <CustomSpan>{params.value}</CustomSpan>
    </Tooltip>
  ),
  type: 'string' },
  { field: 'inicio', flex: 1, headerName: 'Início', type: 'date', minWidth: 135 },
  { field: 'termino', flex: 1, headerName: 'Término', type: 'date', minWidth: 135 },
  { 
    field: 'situacao',
    flex: 1,  
    headerName: 'Situação' ,      
    renderCell: (params) => (
      <Chip label={params.value.name} variant="outlined" color={params.value.color} />
    ),
    minWidth: 105
   },
   { 
    field: 'acao',
    flex: 1,  
    headerName: 'Ação' ,      
    renderCell: (params) => (
      <Chip label={'ACTION'} onClick={handleClickOpen} variant="outlined" />
    ),
    minWidth: 105
   },
];




type InputEscala = {
  inicio: string;
  termino: string;
}

  const [rows, setRows] = useState<any>([])
  const [erro, setErro] = useState<any>()
  const [state, setState] = useState<boolean>()

  useLayoutEffect(() => {
    const previewRows = sessionStorage.getItem('escala')

    if (previewRows) {
      const parse = JSON.parse(previewRows)
      setRows(parse)
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('escala', JSON.stringify(rows))
  }, [rows])

  async function getEscalas(date: InputEscala) {
    await axios.post(`https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/api/minhas_escalas`, date,
      {
        headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
      }
      }).then(res => {

        const c = res.data.data

        const rows = c.map(item => {
          let color = 'info'
          if (item.situacao === 'Fiscalizada') {
            color =  'success'
          }
          if (item.situacao === 'Publicada') {
            color =  'primary'
          }
          if (item.situacao === 'Digitando') {
            color =  'warning'
          }
          if (item.situacao === 'Cancelada') {
            color =  'error'
          }
          return ({
          id: Math.random(),
          titulo_escala: item.titulo_escala, 
          prefixo_posto: item.prefixo_posto,
          inicio: item.inicio,
          termino: item.termino,
          local: item.local, 
          observacao: item.observacao,
          situacao: {name: item.situacao, color},
          
        })})

        setRows(rows)
        setState(true)
        
      }).catch(err => {
        console.log(err.response.data)
        setErro(err.response.data)
        setState(false)      
      })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const date = {
      inicio: `${data.get('inicio')}`,
      termino: `${data.get('termino')}`
    }
    
    sessionStorage.setItem('saveInitDate', date.inicio)
    sessionStorage.setItem('saveFinalDate', date.termino)
    
    await getEscalas(date)
  }

  const curr = new Date();
  curr.setDate(curr.getDate())
  const today = curr.toLocaleDateString('en-CA');

  // quebrando
  // const init = sessionStorage.getItem('saveInitDate')
  // const final = sessionStorage.getItem('saveFinalDate')

  return (
    <Container title="Escalas">
      <Tittle>Minhas Escalas</Tittle>
        <Form onSubmit={handleSubmit}>
              <TextField
                name="inicio"
                label="Início"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                defaultValue={today}
              />
              <TextField
                name="termino"
                label="Término"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                defaultValue={today}
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

      <DataTable columns={columns} rows={rows}  />

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
            {}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Voltar
          </Button>
        </DialogActions>
      </Dialog>
      
    </Container>
  );
}

export default withAuth(Escalas);


