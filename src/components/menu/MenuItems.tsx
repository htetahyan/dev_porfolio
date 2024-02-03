import React from 'react';
import TransitionLink from "@/animations/CustomLink";
import {Icons} from "@/assets/SvgExporter";
import Link from "next/link";
import { Text } from '../Text';

const MenuItems = ({setOpen}: {setOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {Facebook, Github, Linkedin} = Icons
    const iconMap = {
        facebook: Facebook,
        github: Github,
        linkedin: Linkedin
    };
    return (
        <div className={'menu-items w-full h-full grid place-items-center'}>

        <ul className={'menu-ul items-center flex flex-col gap-4'}>
            {items.map((item, index) => (
                <li  key={index} onClick={() => setOpen(false)}>
                    <TransitionLink
                        className={'text-5xl text-hover primary-font text-white text text-center hover:text-neutral-100'}
                        href={item.path} label={item.label}/>
                </li>
            ))}
        </ul>
      <ul className={'menu-ul flex  gap-4'}>
          {socialLinks.map((item, index) => (
              <Link href={item.path } key={index} onClick={() => setOpen(false)}>
                  {iconMap[item.label as keyof typeof iconMap] && React.cloneElement(iconMap[item.label as keyof typeof iconMap](), { className: 'w-[48px] text h-[48px] text-neutral-100' })}

              </Link>
          ))}
      </ul>
      <Text variant={'h3'} className={'text-neutral-100'} >
@2024
      </Text>
        </div>
    );
};

export default MenuItems;
const items=[{
    label: 'Home',
    path: '/',
},{
    label:'works',
    path: '/test',
},{
    label:'about',
    path: '/about',
}]
const socialLinks = [
    {
        label: 'github',
        path: 'https://github.com/htetahyan',

    },{
    label:'linkedin',
    path:'https://www.linkedin.com/in/htetahyan/',
    },
    {
        label: 'facebook',
        path: 'https://www.facebook.com/htetahyan',
    }
]