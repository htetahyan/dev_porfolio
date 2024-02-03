'use client'
import React from 'react';
import {gsap} from "gsap";

import { useGSAP } from "@gsap/react";
import MenuItems from "@/components/menu/MenuItems";

const Menu = () => {
    const [open, setOpen] = React.useState(false);
    const container = React.useRef(null);
    useGSAP(()=> {
        const menu = document.querySelector('.menu');


        open ? menu?.classList.add('menu-open'): menu?.classList.remove('menu-open');
     gsap.to('.menu-modal', {
             y: open ? 0 : '-100%',
         borderBottomLeftRadius: open ? 0 : 40,
         borderBottomRightRadius: open ? 0 : 40,
         ease: "power4.out",
         duration: 0.2,
         delay: 0.3
         })

    },{scope: container,dependencies: [open]})
    return (<div ref={container}>
            <div className={'menu-modal'}>
                <MenuItems setOpen={setOpen}/>
            </div>
        <div className={'menu-container'}>
        <div
            className={'menu'} onClick={() => setOpen(!open)} >

        <div className={'hamburger text'}>
            <div className={'burger-one'}>
</div>
            <div className={'burger-two'}>
            </div></div>
        </div>
        </div>
    </div>
    );
};

export default Menu;