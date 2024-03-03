import React from 'react';
import TransitionLink from "@/animations/CustomLink";

import Link from "next/link";
import { Text } from '../Text';

const MenuItems = ({setOpen}: {setOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {

    return (
        <div className={'menu-items w-full h-full grid place-items-center'}>

        <ul className={'menu-ul  items-center flex flex-col gap-4'}>
            {items.map((item, index) => (
                <li  key={index} onClick={() => setOpen(false)}>
                    <TransitionLink
                        className={'text-6xl text-hover font-primary text-white text text-center hover:text-neutral-100'}
                        href={item.path} label={item.label}/>
                </li>
            ))}
        </ul>
      <ul className={'menu-ul grid w-full grid-cols-3'}>
          {socialLinks.map((item, index) => (
              <Link href={item.path } className={' rounded-full  '} key={index} onClick={() => setOpen(false)}>
                <Text  font={'primary'} className={'text-white text-center text-xl '}>{item.label}</Text>
              </Link>
          ))}
      </ul>

        </div>
    );
};

export default MenuItems;
const items=[{
    label: 'Home',
    path: '/',
},{
    label:'Works',
    path: '/works',
},{
    label:'About',
    path: '/about',
}]
export const socialLinks = [
    {
        label: 'Github',
        path: 'https://github.com/htetahyan',

    },{
    label:'Linkedin',
    path:'https://www.linkedin.com/in/htetahyan/',
    },
    {
        label: 'Facebook',
        path: 'https://www.facebook.com/htetahyan',
    }
]