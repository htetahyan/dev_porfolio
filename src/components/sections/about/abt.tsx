'use client'
import React, {useRef} from 'react';
import {Text} from "@/components/Text";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import AboutIntro from "@/components/sections/about/About_Intro";
const Abt = () => {
    const pageRef=useRef(null)
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)
     const section= document?.querySelector('.abt-intro-section')
        ScrollTrigger.create({
            trigger:section,
            start:'-2% top',end:'bottom bottom',
            onEnter:()=>{
                gsap.set(section,{
                    position:'relative',
                    top:'195%'
                })
            }, onLeaveBack:()=>{
                gsap.set(section,{
                    position:'relative',
                    top:'0%'
                })}
        })
        scrollZoom('.abt-intro-heading .abt-intro-letter:first-child',-innerHeight*3)
scrollZoom('.abt-intro-heading .abt-intro-letter:last-child',innerHeight*3)
        return ()=>{
            gsap.killTweensOf(section);
        }
    },{scope:pageRef})
    const scrollZoom=(className:string,x:number)=>{
        gsap.to(className,{
            x:()=> x,
            scale:250,
display:'none',
            ease:'power2.inOut',
            scrollTrigger:{
                trigger:pageRef.current,
                start:'top top',
                end:'+=200%',
                scrub:1,id:'abt-intro-section'}})}
    return (
        <div ref={pageRef} className={'relative  '}>
            <div className={'abt-intro-heading fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex w-full z-[2]'}>
              <AbtIntroLetter letter={'ABOUT'} />
                <AbtIntroLetter letter={'PAGE'} />
            </div>
            <div className={' abt-intro-section  relative top-0 min-h-[200vh] w-full'}>

            </div>
            <AboutIntro/>
        </div>
    );
};
export default Abt;
const AbtIntroLetter=({letter}:{letter:string})=>(
    <div  className={'w-full flex flex-[1] abt-intro-letter'}>
    {letter.split('').map((txt,index)=>{return(
        <Text key={index} className={'text-[15vw]    font-secondary tracking-tight flex-[1] text-center '}>{txt}</Text>
    )})}
</div>)
