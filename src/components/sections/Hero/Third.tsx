'use client';
import React, {useRef} from 'react';
import {Text} from "@/components/Text";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import * as tls from "tls";
import HorizontalScroll from "@/utils/HorizontalScroll";
import AbtHEADING from "@/components/sections/about/AboutPageWrapper";
import Contact from "@/components/Contact";

const Third = () => {

    const ThirdContainer=useRef(null)
    const wrapperRef = useRef(null);
    const racesRef = useRef(null);
    HorizontalScroll({wrapperRef, racesRef})
    const {contextSafe}=useGSAP(()=>{
        const temp=document.querySelector('.template')
        const tl=gsap.timeline({

            scrollTrigger: {
                trigger: ThirdContainer.current,
                start: '-=800px',

                end: '-=400px',
                scrub:  true
            },
        })
        const mm=gsap.matchMedia();

        mm.add('(orientation: landscape)', () => {
            tl.to(temp,{
                backgroundImage:'linear-gradient(to right,  #F5F5F5,#FBD3CB,#FFFFFF)',
                duration:  1.5,
                ease: "power2.in",
            })
            //horizontalSCroll

            gsap.to('.contact-text',{
                y: 0,
                ease: "power2.in",
                scaleY: 1,
                duration:0.3,

                scrollTrigger: {
                    trigger:'.contact-text',
                    start: '-=650%',
                    end: '-=620%',
                    scrub: 1,

                }
            })

        })


        return () => {
            gsap.killTweensOf(temp)
            gsap.killTweensOf('.scroll-reveal-text');
            gsap.killTweensOf('.horizontal-element')
            gsap.killTweensOf(ThirdContainer.current)
            mm.kill()

        }

    },{scope: ThirdContainer})

    return (
        <div className={'min-h-screen third overflow-x-hidden'} ref={ThirdContainer}>
            <div className={'w-fit'}>
         <AbtHEADING heading={'SERVICES'}/>
                <div className={'second-line-showcase justify-self-center bg-black h-2 w-0'}/>
            </div>
            <div ref={wrapperRef} className=" px-2 md:px-10 relative ">
                <div className="flex w-fit flex-nowrap h-[50vh]" ref={racesRef}>
                    {horizontalElements.map((element,index)=> {
                        return(
                            <div key={'key'} className={'flex flex-col justify-center  items-center h-auto w-screen relative'}>
                                <Text className="text-4xl md:text-8xl    ">{element}{" "}DEVELOPEMENT</Text>


                            </div>
                        )
                    })}

                </div>
            </div>



                <Contact/>

        </div>
    );
};

export default Third;

export const horizontalElements = ['FRONTEND', 'BACKEND', 'ECOMMERCE-WEBSITE', 'LANDING-PAGE']
export const horizontalBgs = ['#FBD3CB', 'cyan', 'red', 'white']