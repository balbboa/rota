import {
  AccountBalanceWallet, House, InsertInvitation,
  LocalDining,
  Person
} from "@styled-icons/material";
import React from "react";

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Início",
    icon: House,
    url: "/dashboard",
  },
  {
    name: "Minhas Escalas",
    icon: InsertInvitation,
    url: "/escalas",
    // subItems: [
    //   {
    //     name: "New",
    //     icon: AddShoppingCart,
    //     url: "/new-orders",
    //   },
    //   {
    //     name: "Completed",
    //     icon: Done,
    //     url: "/completed-orders",
    //   },
    // ],
  },
  {
    name: "Meus Vales",
    icon: LocalDining,
    url: "/vales",
    // subItems: [
    //   {
    //     name: "Corporate",
    //     icon: Business,
    //     url: "/corporate",
    //   },
    //   {
    //     name: "SMB",
    //     icon: HomeWork,
    //     url: "/smb",
    //     subItems: [
    //       {
    //         name: "Retail",
    //         icon: Person,
    //         url: "/retail",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    name: "Minhas Diárias",
    icon: AccountBalanceWallet,
    url: "/diarias",
  },
  {
    name: "Marcar DO",
    icon: Person,
    url: "/marcacao",
  },
  // {
  //   name: "Sair",
  //   icon: ExitToApp,
  //   url: "/signin",
  // },
];

export type MenuItem = {
  name: string;
  icon: React.ComponentType;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItem[];
};

type MenuOption = {
  name: string;
  icon: React.ComponentType;
  url: string;
  subItems?: MenuOption[];
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);
