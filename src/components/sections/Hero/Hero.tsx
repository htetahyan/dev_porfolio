'use client'
import React, { useRef} from 'react';
import {Text} from "@/components/Text";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

import {splitWords} from "@/animations/TextAnimation";
import {Scroll} from "@/assets/SvgExporter";





const Hero = () => {
    let refs = useRef([]);
    const container=useRef(null);


    useGSAP(() => {
        const context=gsap.context(() => {
            gsap.set(refs.current, {
                yPercent: -150,
                display: 'inline-block',
                flexWrap: 'wrap',
                willChange: 'transform',

            });

                const tl = gsap.timeline({
                    defaults: {
                        ease: "power4.out"  },

                })
                            // Add animations to the timeline
              tl.to('.intro-split-p', {y: 0, stagger: 0.02})
                    .to(refs.current, {yPercent: 0, stagger: 0.02})



  })
        return () => {
         context.revert()
            gsap.killTweensOf(refs.current)

            gsap.killTweensOf('.intro-sub-text');
         gsap.killTweensOf('.intro-split-p')
        }
    }, {scope: container,dependencies:[]} );


    return (
        <div ref={container} className='flex  lg:items-center flex-wrap lg:block p-2 mb-5'>
            <Text  className={'underline text-lg md:text-2xl intro-sub-text'} font={'primary'}>PORTFOLIO</Text>
            <div
                className={'max-w-full md:max-w-4xl intro-text relative  '}>

                    {   splitWords(phrase,'relative intro-split-p overflow-hidden text-5xl md:text-7xl lg:text-9xl text font-primary ','',refs)}
            </div>

           <div className={'absolute bottom-0 left-1/3 flex justify-center items-center'}><Text className={'text-2xl  tracking-wider'}>SCROLL</Text> <Scroll className={'max-w-16 max-h-28 '}/></div>
        </div>
    );
};

export default Hero;
const phrase="Crafting Code, Creating Connections!"
