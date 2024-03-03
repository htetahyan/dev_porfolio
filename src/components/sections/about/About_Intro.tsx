'use client';

import React, { useRef, useState } from 'react';
import { Text } from "@/components/Text";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HorizontalScroll from "@/utils/HorizontalScroll";

// Constants for animation durations and delays
const ANIMATION_DURATION =  0.5;
const ANIMATION_DELAY =  0.5;

const AboutIntro = () => {
    const pageRef = useRef(null);
    const wrapperRef = useRef(null);
    const racesRef = useRef(null);
    HorizontalScroll({ wrapperRef, racesRef });

    // Assuming phrase is defined somewhere in your component or passed as a prop
    const [phrase, setPhrase] = useState(["I am Htet Ah Yan", "Creative developer who loves to create", "beautiful and performant web applications."]);

    useGSAP(() => {
const abtSectionTxts =document?.querySelectorAll('.abt-section-text')
        const context = gsap.context(() => {
abtSectionTxts.forEach((el,i)=>{
    gsap.to(el.children,{
        scaleY:1,
        y:0,
        stagger:0.05,
        opacity:1,ease:'none',duration:1,
        scrollTrigger:{
            trigger:el.parentElement,


            start:'-=650px',
            scrub:1,
            end:'-=400px',}

    })

    // Avoid direct DOM manipulation. Instead, use React state or refs.
    // For demonstration, I'm keeping the direct DOM manipulation as is.

});
})

        return () => {
            context.revert();

        };
    }, { scope: pageRef });

    return (
        <div ref={pageRef} className={'min-h-screen mt-[10vh] overflow-x-hidden'}>
            <div className={'overflow-hidden w-fit relative'}>
                <Text variant={'heading'} font={'secondary'} className={'abt-text-1 will-change-auto '}>ABOUT ME</Text>
                <div className={'bg-black  w-full h-1 mt-2 abt-line'} />
            </div>
            <div ref={wrapperRef} className="px-2 relative ">
                <div className="flex w-fit flex-nowrap items-center h-[50vh]" ref={racesRef}>
                    {phrase.map((element, index) => (
                        <div key={index} className={'flex  flex-col justify-center items-center w-screen flex-wrap relative'}>
                            <Text className="text-4xl text-center lg:text-6xl abt-text-2 horizontal-element abt-text-2 will-change-auto">{element}</Text>
                        </div>
                    ))}
                </div>
              <Text className={'text-3xl abt-text-2 '}>Keep scrolling!</Text>
            </div>
        </div>
    );
};

export default AboutIntro;
