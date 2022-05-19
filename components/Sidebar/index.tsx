import { ExitToApp } from "@styled-icons/material";
import React from "react";
import { MENU_ITEMS } from "../../constants/menu-items";
import { AuthContext } from "../../contexts/AuthContext";
import MenuItemsList from "../MenuItemsList";
import { Exit, SidebarContainer } from "./Sidebar.styles";

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
