'use client';
import React, {useRef} from 'react';
import {Text} from "@/components/Text";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import * as tls from "tls";

const Third = () => {

    const ThirdContainer=useRef(null)
const wrapperRef = useRef(null);
    const racesRef = useRef(null);
    const {contextSafe}=useGSAP(()=>{
        const temp=document.querySelector('.template')
        const tl=gsap.timeline({

            scrollTrigger: {
                trigger: ThirdContainer.current,
                start: '-=800px',
                markers: true,
                end: '-=400px',
                scrub:  true
            },
        })
        const mm=gsap.matchMedia();
        mm.add('(orientation: portrait)', () => {
            const horizontal=document.querySelectorAll('.horizontal-element')
            horizontal.forEach((h,index)=> {
                gsap.to(temp,{
                    background:()=> horizontalBgs[index],
duration:1,
                    ease: "power2.in",
                    stagger:0.3,
                    scrollTrigger:({
                        trigger:h,
                        start:'-=20%',end:'bottom bottom',
                        markers:true,
                        scrub:1,

                        invalidateOnRefresh:true,

                    })
                })
            })

            tl.to(temp,{
                backgroundImage:'linear-gradient(to bottom,  #F5F5F5,#FBD3CB)',
                duration:  1.5,
                ease: "power2.in",
            })
            //scrollreveal
            const scrollReveal = document.querySelectorAll('.scroll-reveal-text');
            scrollReveal.forEach((element, index) => {

             gsap.fromTo(element, {
                    y: 100,
                    opacity: 0,
                 duration: 0.4,
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    ease: "power4.in",
                    scrollTrigger: {
                        trigger: element,
                        start: '-=500%',
                        end: '-=400%',
                        scrub: 1,
                        markers: true
                    }
            })})

        })
        mm.add('(orientation: landscape)', () => {
            tl.to(temp,{
                backgroundImage:'linear-gradient(to right,  #F5F5F5,#FBD3CB,#FFFFFF)',
                duration:  1.5,
                ease: "power2.in",
            })
            //horizontalSCroll
            const scrollAmount = (element: any) => {
                let elementWidth = element.scrollWidth;
                return -(elementWidth - window.innerWidth);
            };

            const tween = gsap.to(racesRef.current, {
                x: scrollAmount(racesRef.current),
                duration: 3,
                ease: "none",


            });


            const scroll=   ScrollTrigger.create({
                trigger:wrapperRef.current,
                start:"top 20%",
                end: () => `+=${scrollAmount(racesRef.current) * -1}`,
                pin:true,
                animation:tween,
                scrub:1,
                invalidateOnRefresh:true,
                markers:true
            })
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
                    markers: true
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
        <div className={'min-h-screen third'} ref={ThirdContainer}>g
            <div className={'max-w-max'}>
                <Text variant={'subHeading'} font={'secondary'}>SERVICES</Text>
                <div className={'second-line-showcase justify-self-center bg-black h-2 w-0'}/>
            </div>
            <div ref={wrapperRef} className=" px-2 md:px-10 ">
                <div className="md:flex w-fit flex-nowrap" ref={racesRef}>
                    {horizontalElements.map((element,index)=> {
                        return(
                            <div key={'key'} className={'horizontal-element flex flex-col justify-center overflow-hidden items-center h-[30vh] md:h-auto md:w-screen relative'}>
                                <Text className="text-4xl md:text-8xl scroll-reveal-text   ">{element}{" "}DEVELOPEMENT</Text>

                                <div className={'right-0 absolute none md:block md:h-full w-2 bg-black '}/>
                            </div>
                        )
                    })}

                </div>
            </div>
<div className={'text-center h-[70vh] lg:h-screen grid'}>
    <div className={'second-line-showcase bg-black h-1 w-0'}/>
  <div className={'grid items-center overflow-hidden'}> <Text variant={'heading'} className={'tracking-wider contact-text scale-y-75 lg:translate-y-[250%]  inline-block '} font={'primary'}>CONTACT</Text>
    <Text variant={'subHeading'} font={'secondary'}>htetahyan@gmail.com</Text>
  </div >
    <div className={'flex justify-around items-end'}>
        {['FACEBOOK','GITHUB','LINKEDIN'].map((element,index)=>(
            <Text key={index} variant={'h3'} className={'tracking-wider text-hover'} font={'secondary'}>{element}</Text>
        ))}

       </div>
</div>
        </div>
    );
};

export default Third;
export const horizontalElements=['FRONTEND','BACKEND','ECOMMERCE-WEBSITE','LANDING-PAGE']
export const horizontalBgs=['#FBD3CB','#FDD1EA','#FED2E1','white']