import { Menu, ChevronLeft, KeyboardArrowDown } from "@styled-icons/material";
import {
  HeaderContainer,
  IconContainer,
  TitleContainer,
  Notification,
  Text,
  LogoContainer
} from "./Header.styles";
import Image from 'next/image';
import userPic from '../../public/user.png';
import Bell from '../../public/bell.png';
import Rota from '../../public/RotaWeb.png';
import { useEffect, useState } from "react";
import axios from "axios";

interface Perfil {
  usuario_nome_guerra: string,
  usuario_titulo: string
}


type HeaderProps = {
  isOpened: boolean;
  toggleDrawer: () => void;
};

export default function Header({ isOpened, toggleDrawer }: HeaderProps) {

  useEffect(() => {
    loadUser()
  }, [])

  const [users, SetUsers] = useState<Perfil>()

  const loadUser = async () => {
    try {
    const res = await axios.post(`https://www2.agendamento.pm.rn.gov.br/sispag_ws/v1/public/api/usuario`, '',
      {
        headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
        }
      })
      SetUsers(res.data.data) 
  } catch (err){
    console.log(err) 
  } 
  }

  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      </IconContainer>
      <LogoContainer>
        <Image
          src={Rota}
          alt="rota"
          width={120}
          height={23}
          />
      </LogoContainer>
      <TitleContainer>
      {/* <Notification>
        <Image
          src={Bell}
          alt="Você"
          width={25}
          height={25}/>
      </Notification> */}
      <Image
        src={userPic}
        alt="Você"/>
        <Text>{users?.usuario_titulo} {users?.usuario_nome_guerra}</Text> 
        {/* <IconContainer>
        <KeyboardArrowDown />
        </IconContainer> */}
      </TitleContainer>
      
    </HeaderContainer>
  );
}
