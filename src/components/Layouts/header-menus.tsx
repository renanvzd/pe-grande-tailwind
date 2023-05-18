import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";

type MenuLinksItems = {
  menuTitle: string;
  href: string;
  icon: JSX.Element;
};

export const MenuHeader: MenuLinksItems[] = [
  {
    menuTitle: 'Home',
    href: '/',
    icon: <RxDashboard />,
  },
  {
    menuTitle: 'Contact',
    href: '/contact',
    icon: <AiOutlineMail />,
  },
]