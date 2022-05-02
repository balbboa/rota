import type { NextPage } from "next";
import Container from "../components/Container";
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from "axios";

axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const SignIn: NextPage =  () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const obj = {
      cpf: data.get('cpf'),
      password: data.get('password')
    }


  axios.get('https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/sanctum/csrf-cookie').then(response => {
      axios.post(`https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/api/login`, {
        params: obj, 
        withCredentials: true
      }).then(res => {
        localStorage.setItem('auth_token', res.data.token);
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    });

  };

  return (
    <Container title="Sign In">
       <div>
       <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}"/>
        <section className="signinbg">
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h2" color={'#FFFFFF'}>
            RotaWeb
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="cpf"
              label="CPF"
              name="cpf"
              autoComplete="cpf"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>    
        </section>
      </div>
    </Container>
  );
};

export default SignIn;





