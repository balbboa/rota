import { Exit, SidebarContainer } from "./Sidebar.styles";
import { MENU_ITEMS } from "../../constants/menu-items";
import MenuItemsList from "../MenuItemsList";
import { ExitToApp } from "@styled-icons/material";
import React from "react";
import { AuthContext } from "../../contexts/AuthContext";



type SidebarProps = {
  isOpened: boolean;
}; 
export default function Sidebar({ isOpened }: SidebarProps) {

  const {signOut} = React.useContext(AuthContext)
  return (
    <SidebarContainer isOpened={isOpened}>
      <MenuItemsList options={MENU_ITEMS} />
      <Exit onClick={signOut}>
          <ExitToApp></ExitToApp>
          <span>Sair</span>
      </Exit>
 
    </SidebarContainer>
  );
}
