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


type HeaderProps = {
  isOpened: boolean;
  toggleDrawer: () => void;
};

export default function Header({ isOpened, toggleDrawer }: HeaderProps) {
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
      <Notification>
        <Image
          src={Bell}
          alt="Você"
          width={25}
          height={25}/>
      </Notification>
      <Image
        src={userPic}
        alt="Você"/>
        <Text>Balboa</Text> 
        {/* <IconContainer>
        <KeyboardArrowDown />
        </IconContainer> */}
      </TitleContainer>
      
    </HeaderContainer>
  );
}
