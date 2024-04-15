'use client'
import React, {useRef} from 'react';
import {Text} from "@/components/Text";
import Image from "next/image";
import ryan_gosling from '@/assets/abt/me.png'
import {blurDataUrl} from "@/components/Carousel";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
const AboutOne = () => {
const pageRef=useRef(null)
    useGSAP(()=>{
        fadeIn(pageRef)
    })
    return (
        <div ref={pageRef} className={'relative grid opacity-0 translate-x-1/2  lg:grid-cols-2 h-full '}>
<div className={'grid place-items-center'}>
            <Text variant={'h3'} className={'text-[#0e1129] '}>I am a Software Engineer who based in Yangon! </Text>
</div>     <div className={'relative  bg-amber-100 flex items-center  overflow-hidden'}>   <Image fetchPriority={'low'}
                        loading={'lazy'}
                        placeholder={'blur'} className={'h-full object-contain'}
                        blurDataURL={blurDataUrl}
                        src={ryan_gosling} alt={'I am ryan gosling'}/>
             <Text font={'primary'} variant={'heading'} className={' t text-[#0e1129]'} >
YUP!
             </Text>
         </div>
        </div>
    );
};

export default AboutOne;
const fadeIn=(ref:React.MutableRefObject<any>)=>{
    gsap.to(ref.current,{
        opacity:1,ease:'power4.in',duration:0.4,
        x:0,y:0,
        scrollTrigger:{
            trigger:ref.current,
                        start:'-=150%',
            scrub:1,
            end:'-=100%',
        }

    })
}