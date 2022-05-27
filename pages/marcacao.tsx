import { Alert, Button, TextField } from "@mui/material";
import { GridColDef } from '@mui/x-data-grid';
import axios from "axios";
import * as React from 'react';
import Container from "../components/Container";
import { Tittle } from '../components/Container/Container.Styles';
import { Form } from "../components/Form/Form.Styles";
import DataTable from "../components/Table";
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

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Ord.', type: 'number', minWidth: 40, flex: 1 },
    { field: 'unit', headerName: 'Unidade', type: 'string', minWidth: 300, flex: 1 },
    { field: 'startDate', headerName: 'Início', type: 'dateTime', minWidth: 160, flex: 1 },
    { field: 'endDate', headerName: 'Término', type: 'dateTime', minWidth: 160, flex: 1 },
    { field: 'local', headerName: 'Local', type: 'string', minWidth: 300, flex: 1 },
    { field: 'funcao', headerName: 'Função', type: 'string', minWidth: 100, flex: 1 },
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
        headers: {
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

            })
          })

        sessionStorage.setItem('marcacao', JSON.stringify(rows))

        setRows(rows)
        setState(true)

      })
  }

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
  try {
    const previewStart = sessionStorage.getItem('saveInitDate-Marcacao')
    const previewFinal = sessionStorage.getItem('saveFinalDate-Marcacao')

    startDate = previewStart ? previewStart : today
    finalDate = previewFinal ? previewFinal : today
  }
  catch {
    startDate = today
    finalDate = today
  }

  // let hour = curr.getHours();
  // let string1 = [ "eu concordo", "estou ciente", "estou de acordo"]

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
        <Alert sx={{ my: 2 }} variant="filled" severity="error">{erro?.msg}{erro?.Mensagem}</Alert>
      ) : (null)
      }

      <DataTable columns={columns} rows={rows1} />

    </Container>
  );
}

export default withAuth(Marcacao);
