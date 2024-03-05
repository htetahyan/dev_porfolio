'use client'
import {Text} from "@/components/Text";
import React from "react";
import {socialLinks} from "@/components/menu/MenuItems";
import Link from "next/link";

import TransitionLink from "@/animations/CustomLink";


 const Contact=()=>{
    return (
        <div className={' h-[90vh] grid p-4'}>
<div className={'grid lg:grid-cols-2 '}><div className={'grid'}>
    <div>
       <Text variant={'subHeading'} className={''}>{'Let\'s '}</Text>

    <Text variant={'subHeading'} >contact</Text></div>
    <Text className={'text-4xl font-semibold font-secondary items-end '}>htetahyan@gmail.com</Text>
    <Text className={'text-2xl items-end '}>© 2024 | Htet Ah Yan</Text>
</div>
    <div className={'bg-amber-400 grid place-items-center rounded-xl'}>
        {Links.map((text, index) => (
            <TransitionLink href={text.path} label={text.label} className={'font-primary text-5xl lg:text-8xl  text-hover text'} key={index}/>
        ))}

    </div>
</div>

            <div className={'flex justify-around items-center lg:items-end'}>
                {socialLinks.map((social, index) => (
                 <Link key={index} href={social.path}>
                     <Text   className={'tracking-wider text-lg text-hover uppercase'}
                          font={'secondary'}>{social.label}</Text>
                 </Link>
                ))}

            </div>
        </div>
    )
}
export default Contact
const Links=[{label: 'HOME', path: '/'},{label:'WORKS', path:'/works'}, {label:'ABOUT', path:'/about'}]
