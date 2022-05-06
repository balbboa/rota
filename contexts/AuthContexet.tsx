import {createContext} from "react"
import axios from 'axios';
import {setCookie}  from 'nookies'
import Router from 'next/router'
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";


type SignInData = {
  cpf: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  
  let isAuthenticated = false;

  async function signIn({cpf, password}: SignInData) {
    try{
      await axios.get('https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/sanctum/csrf-cookie').then(response => {
        axios.post(`https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/api/login`, {cpf, password}).then(res => {
          localStorage.setItem('auth_token', res.data.data.token);
          isAuthenticated = !!res.data.data.token
          Router.push('/')
        }).catch(err => {
          console.log('post error: ', err)
        })
      });  
      
    }catch(err){
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}