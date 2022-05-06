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
import axios from 'axios';

import { AuthContext } from "../contexts/AuthContexet"


axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*"
axios.defaults.headers.post['Access-Control-Allow-Credentials'] = true
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Set-Cookie'] = true
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.withCredentials = true

function SignIn() {

  const {signIn} = React.useContext(AuthContext)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const obj = {
      cpf: formData.get('cpf'),
      password: formData.get('password')
    }
    const data = {
      cpf: `${obj.cpf}`,
      password: `${obj.password}`
    }

    await signIn(data)
  };

  return (
    <Container title="Sign In">
      <div>
        <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
        <meta name="csrf-token" content="{{ csrf_token() }}"/>
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
}

export default SignIn;


