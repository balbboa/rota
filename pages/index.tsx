import Container from "../components/Container";
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import Image from 'next/image';
import Rota from '../public/RotaWeb.png';

import { AuthContext } from "../contexts/AuthContext"
import { BgSection, FormLogin } from "../components/Signin/Signin.styles";


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
    <Container title="RotaWeb">
      <BgSection>
        <input type="hidden"/>
        <section className="signinbg">
        <FormLogin>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Image
          src={Rota}
          alt="rota"
          width={240}
          height={46}
          />
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
                <Link href="https://www8.defesasocial.rn.gov.br/autenticador/index.xhtml" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
            </Grid>
            </Box>
          </Box>
          </FormLogin>
        </section>
      </BgSection>
    </Container>
  );
}

export default SignIn;


