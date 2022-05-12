import {createContext, useState} from "react"
import axios from 'axios';
import Router from 'next/router'
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";


type SignInData = {
  cpf: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState('')
  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  async function signIn({cpf, password}: SignInData){
    try{
      await axios.get('https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/sanctum/csrf-cookie').then(response => {
        axios.post(`https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/api/login`, {cpf, password}).then(res => {
          localStorage.setItem('auth_token', res.data.data.token);
          setIsAuthenticated(true)
          setToken(res.data.data.token)
          Router.push('/dashboard')
          
        }).catch(err => {
          setOpen(true)
          console.log('post error: ', err)
        })
      });        
    }catch(err){
      setOpen(true)
      console.log(err)
    }
  }

  function signOut(){
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false)
    setToken('')
    Router.push('/')
  }

  return (
   <>
    <AuthContext.Provider value={{isAuthenticated, signIn, signOut}}>
      {children}
    </AuthContext.Provider>

    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
        Usuário ou Senha inválido!
      </Alert>
    </Snackbar>
   </> 
  )
}