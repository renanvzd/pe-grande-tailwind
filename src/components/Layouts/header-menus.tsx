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
    menuTitle: 'Minilofts',
    href: '/minilofts',
    icon: <AiOutlineMail />,
  },
  {
    menuTitle: 'Casarão',
    href: '/casarao',
    icon: <AiOutlineMail />,
  },
  {
    menuTitle: 'Casa dos Fundos',
    href: '/casa-dos-fundos',
    icon: <AiOutlineMail />,
  },
  {
    menuTitle: 'Outras Moradas',
    href: '/outras-moradas',
    icon: <AiOutlineMail />,
  },
  {
    menuTitle: 'Camping nas Montanhas',
    href: '/montanhas',
    icon: <AiOutlineMail />,
  },
]