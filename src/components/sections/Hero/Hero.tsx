'use client'
import React, {useContext, useRef} from 'react';
import {Text} from "@/components/Text";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import AnimationContext from "@/context/AnimationState";
import {useIsomorphicLayoutEffect} from "@/utils/useisomorphiclayouteffect";
import {Icons} from "@/assets/SvgExporter";
import Image from "next/image";


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
                        ease: "power4.out",


                    },

                })

                // Set initial state


                // Add animations to the timeline
               const tween= tl.to('.intro-split-p', {y: 0, stagger: 0.02})
                    .to(refs.current, {yPercent: 0, stagger: 0.02})

                    .to('.intro-sub-text', {y: 0, opacity: 1});

              // Perform any post-animation tasks here
  })
        return () => {
         context.revert()
            gsap.killTweensOf(refs.current)
            refs.current.forEach((r:HTMLSpanElement)=> {

            })
            gsap.killTweensOf('.intro-sub-text');
         gsap.killTweensOf('.intro-split-p')
        }
    }, {scope: container,dependencies:[]} );

    return (
        <div ref={container} className='flex relative lg:items-center flex-wrap lg:block p-2 mb-5'>
            <Text  className={'underline text-sm md:text-lg intro-sub-text'} font={'primary'}>PORTFOLIO</Text>


            <div
                className={'max-w-full md:max-w-4xl intro-text relative  '}>

                    {   splitWords(phrase,'relative intro-split-p overflow-hidden text-5xl md:text-7xl lg:text-9xl text font-primary ','',refs)}

            </div>
            <Text className={'text-xl md:text-lg intro-sub-text'}> Hello, I&#39;m Htet ah yan! </Text>
        </div>
    );
};

export default Hero;
const phrase="Crafting Code, Creating Connections!"
export const splitLetters = (word: string,refs: React.MutableRefObject<any>,spanClassName:string) => {
    let letters: JSX.Element[] = []
    word.split("").forEach((letter, i) => {
        // @ts-ignore
        letters.push(<span  className={spanClassName} key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
}
export const splitWords = (phrase: string,className: string,spanClassName:string,refs: React.MutableRefObject<any>) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach( (word, i) => {
        const letters = splitLetters(word,refs,spanClassName);
        body.push(<p className={ `${className}  mr-2 p-2    `} key={word + "_" + i}>{letters}</p>)
    })
    return body
}