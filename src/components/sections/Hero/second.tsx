'use client'
import React, {useRef} from 'react';
import {Text} from "@/components/Text";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import portal from '@/assets/pngs/portal.png'
import tst from '@/assets/pngs/tst.png'
import Image from "next/image";
import TransitionLink from "@/animations/CustomLink";
import {blurDataUrl} from "@/components/Carousel";
import { contentally, contentally_2, tst_2, tts } from '@/assets/pngs/exporter';

const Second = () => {
    const secondRef = useRef(null);
    useGSAP(() => {
        // Cache DOM elements to minimize DOM access
        const secondLine = document.querySelector('.second-line');
        const secondTextElements = document.querySelectorAll('.second-text');
        const imageContainers = document.querySelectorAll('.second-image-container');

        // Create a timeline for the first animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: secondRef.current,

                start: '-=400px',
                end: '+=100px',

                scrub:  1
            },
        })

            .to(secondLine, {
                width: '90%',
                ease: "power1.in",
                duration:  0.3
            })   .to('.second-text-1',{
            yPercent:  0,
            backgroundColor:  'rgba(0,0,0,0)',
            y:  0,
            opacity:  1,
            ease: "power1.in",
            duration:  0.4
        })

        // Animate text elements using a loop
        secondTextElements.forEach(text => {
            gsap.to(text.children, {
                yPercent:  0,
                y:  0,
                opacity:  1,
                ease: "power4.out",
                stagger:  0.05,
                duration:  0.2,
                scrollTrigger: {
                    trigger: text.parentElement,
                    start: "-=300px",
                    end: "+=200px",

                    scrub: true
                }
            });
        });
const lines=document.querySelectorAll('.second-line-showcase')
        lines.forEach(line => {
            gsap.to(line, {
                width: '100%',
                ease: "none",
                duration:  0.3,
                scrollTrigger: {
                    trigger: line.parentElement,
                    start: "-=300px",
                    end: "center",

                    scrub: true
                }
            });
        })
        // Animate image containers using a loop
        imageContainers.forEach(container => {
            const image = container.querySelector('.second-image');
            gsap.to(image, {
                yPercent:  45,
                opacity:  1,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom top",

                    scrub: true
                }
            });
        });

        // Return a function to revert the context when the component unmounts
        return () => {
            tl.kill(); // Kill the timeline to remove all tweens
            secondTextElements.forEach(text => {
                gsap.killTweensOf(text); // Kill any remaining tweens on the text elements
            });
            imageContainers.forEach(container => {
                const image = container.querySelector('.second-image');
                gsap.killTweensOf(image); // Kill any remaining tweens on the images
            });
        };
    }, { scope: secondRef });

    return (
        <div ref={secondRef} className={' w-full lg:w-[90%]  overflow-hidden'}>
            <div className={'max-h-max  overflow-hidden grid justify-center items-center'}>
           <TransitionLink href={'/works'}  label={'     VIEW ALL PROJECTS >'}       className={' text text-5xl md:text-7xl text-black lg:text-8xl  second-text-1 translate-y-[150%]'}/>

                <div className={'w-0 mx-auto h-1 second-line bg-black'}></div>
            </div>
            {showCases.map((showCase,index)=> {
          return(       <div key={index}
                    className={'flex  min-h-[40vh] lg:min-h-[80vh] relative w-full mt-4 items-center justify-center flex-col work-showcase overflow-hidden lg:flex-row'}>
 <div className={'second-text w-full flex-1 '}>
     {showCase.title.split(' ').map((t,i)=>{
         return(
             <Text key={i} className={'text-4xl md:text-6xl lg:text-9xl font-secondary opacity-0  translate-y-[150%]'}>{t}</Text>

         )
     })}

 </div>
                    <div className={'second-image-container w-full flex-1 '}>
                        <div className={'second-image-wrapper '}>
                            <Image src={showCase.image} alt={'portal'}  fetchPriority={'high'}
                                   loading={'eager'}
                                   placeholder={'blur'}

                                   blurDataURL={blurDataUrl} className={' second-image border-2 '}/>
                        </div>

                    </div>
<div className={'h-1 bg-black w-2 second-line-showcase mt-4 md:absolute bottom-0'}></div>
                </div>


          )})}

        </div>
    );
};

export default Second;
const showCases = [
    {title: 'Text to speech',image:tts},
    {title:'content ally.ai',image:contentally},{
    title: 'EDUSN PORTAL',
    image: portal
}, {
    title: 'tryskills test .com',
    image: tst
}, 

]
