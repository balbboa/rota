import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import * as React from 'react';
import Container from "../components/Container";
import { Tittle } from '../components/Container/Container.Styles';
import DataTable from "../components/Table";
import withAuth from '../utils/withAuth';

function Marcacao() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Código', type: 'number', minWidth: 70, flex:1 },
    { field: 'unit', headerName: 'Unidade', type: 'string', minWidth: 100, flex:1 },
    { field: 'startDate', headerName: 'Data e Hora Inicial', type: 'dateTime', minWidth: 160, flex:1 },
    { field: 'qtd', headerName: 'Quantidade', type: 'number', minWidth: 100, flex:1 },
    {
      field: 'op',
      headerName: 'Opções', flex:1, minWidth: 100,
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

  const rows = [
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
  return (
    <Container title="Marcação de DO">
      <Tittle>Marcação de Diárias Operacionais</Tittle>
      <DataTable columns={columns} rows={rows} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmar marcação de Diária?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ao confirmar a marcação você se compromete a comparecer no dia e hora descritos, o não comparecimento acarretará o acionamento de medidas cabiveis.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirmar</Button>
          <Button onClick={handleClose} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default withAuth(Marcacao);
