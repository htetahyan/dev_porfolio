
"use client";

import {useRef} from "react";
import { animatePageIn } from "@/animations/PageAnimate";
import {gsap} from "gsap";
import AnimationContext from "@/context/AnimationState";

import {useGSAP} from "@gsap/react";

import Menu from "@/components/menu/Menu";
import Header from "@/components/header/Header";
import QuickToFunc = gsap.QuickToFunc;

export default function Template({ children }: { children: React.ReactNode }) {

    const container=    useRef(null)
    let xTo = useRef<QuickToFunc | null>(null);
    let yTo = useRef<QuickToFunc | null>(null);
   const{contextSafe}= useGSAP((context, contextSafe) => {

        animatePageIn();
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
            const texts= document.querySelectorAll('.text');
            const menuContainer= document.querySelector('.menu-container');
            const menu= document.querySelector('.menu');
            menuContainer?.addEventListener('mousemove', (e)=>{
                handleMenuMouseMove(e as MouseEvent, menu)
            })
            if (contextSafe) {
                menuContainer?.addEventListener('mouseleave', contextSafe((e) => {
                    gsap.to(menu, {y:0 , x: 0, ease: "power4.out", duration: 0.5});
                }))
            }
            texts.forEach((text)=>{
                text.addEventListener('mouseenter', ()=>{
                    gsap.to('.cursor', {scale: 3})
                })
                text.addEventListener('mouseleave', ()=>{
                    gsap.to('.cursor', {scale: 1})
                })
            })

        })
       xTo.current = gsap.quickTo(".cursor", "x", {duration: 0.3, ease: "power2"});
       yTo.current = gsap.quickTo(".cursor", "y", {duration: 0.3, ease: "power2"});
    }, {scope: container});
const MouseMove=contextSafe((e: MouseEvent)=>{
  xTo.current?.(e.clientX);
    yTo.current?.(e.clientY)
})
    const handleMenuMouseMove = (e: MouseEvent, menu: Element | null) => {
        const rect = menu!.getBoundingClientRect();
        const s = e.clientX - rect.left;
        const o = e.clientY- rect.top;
        gsap.to(menu, {
            duration: 0.5,
            x: (s - menu!.clientWidth / 2) / menu!.clientWidth * 50,
            y: (o - menu!.clientHeight / 2) / menu!.clientHeight * 50,
            scale: 1.2,
            ease: "power2.out"
        });
    };
    return (<div className={'template'} ref={container} onMouseMove={(e  )=>
            //@ts-ignore
            MouseMove(e )}

        ><Header/><Menu/>
        <div className={'relative '} >    <div
                id="transition-element-1"
                className="w-screen h-screen bg-gray-300 z-50 fixed top-0 left-0"
            ></div>
            <div
                id="transition-element-2"
                className="w-screen  h-screen bg-black z-50 fixed top-[10vh] left-0"
            ></div>
            <div
                id="transition-element-1"
                className="w-screen h-screen bg-gray-300 z-50 fixed top-[20vh] left-0"
            ></div> <div
            id="transition-element-2"
            className="w-screen  h-screen bg-black z-50 fixed top-[30vh] left-0"
        ></div>
            <div id='transition-element-1' className="w-screen h-screen bg-gray-300 z-50 fixed top-[40vh] left-0"></div>
            <div id='transition-element-2' className="w-screen  h-screen bg-black z-50 fixed top-[50vh] left-0"></div>
            <div id='transition-element-1' className="w-screen h-screen bg-gray-300 z-50 fixed top-[60vh] left-0"></div>
            <div id='transition-element-2' className="w-screen  h-screen bg-black z-50 fixed top-[70vh] left-0"></div>
            <div id='transition-element-1' className="w-screen h-screen bg-gray-300 z-50 fixed top-[80vh] left-0"></div>
            <div id='transition-element-2' className="w-screen  h-screen bg-black z-50 fixed top-[90vh] left-0"></div>

            {children}
        </div>
     <div className={'cursor'}/></div>
    );
}
