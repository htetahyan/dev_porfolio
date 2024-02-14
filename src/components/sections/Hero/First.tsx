'use client'
import React, {useRef} from 'react';
import {splitWords} from "@/components/sections/Hero/Hero";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "@/utils/useisomorphiclayouteffect";

const First = () => {
    const rafs = useRef([]);
    useGSAP(()=> {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(rafs.current, {
            scrollTrigger: {
                trigger: '.first-text-container',
                start: '-300px',
                end: '+100px',
                scrub: true,

            },

            opacity: 1,

            ease: "power1.in",

            stagger: 0.1
        })
        return () => {

            ScrollTrigger.killAll()
        }
    }, {})

    return (
        <div
            className={' lg-px-10 px-2 first-text-container relative lg:mt-10  w-full grid justify-center items-center'}>
            <div className={'second-line-showcase justify-self-center bg-black h-1 w-0'}></div>
            <div className={'first-text-'}>
                {splitWords(phrase, '   text-xl lg:text-5xl text ' +
                    ' relative inline-block justify-center', ' font-secondary relative opacity-30 inline-block', rafs)}
            </div>

        </div>
    );
};

export default First;
const phrase = "  I am a full-stack developer with a passion for creating beautiful and performant web applications, currently open to work and always looking for new opportunities to learn and grow as a developer.    I have a strong foundation in frontend and backend development, and I am always looking for new ways to improve my skills. "
