

// Update the splitLetters function to correctly handle the refs
'use client'
import React, { useRef} from "react";
import {gsap} from "gsap";

import {useGSAP} from "@gsap/react";

export const splitLetters = (word: string, refs: React.MutableRefObject<HTMLSpanElement[]>, spanClassName: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, i) => {
        letters.push(<span className={spanClassName} key={letter + "_" + i} ref={el => {
            if (refs && refs.current) {
                refs.current.push(el as HTMLSpanElement);
            }
        }}>{letter}</span>);
    });
    return letters;
};

// Ensure splitWords also correctly handles refs
export const splitWords = (phrase: string, className: string, spanClassName: string, refs: React.MutableRefObject<HTMLSpanElement[]>) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
        const letters = splitLetters(word, refs, spanClassName);
        body.push(<p className={`${className} mr-2 p-2`} key={word + "_" + i}>{letters}</p>);
    });
    return body;
};
export const revealText = (container: string, refs: React.MutableRefObject<HTMLSpanElement[]>) => {
    gsap.to(refs.current, {
        scrollTrigger: {
            trigger: container,
            start: '-=300px',
            end: 'bottom center',
            scrub: true,

        },

        opacity: 1,

        ease: "power1.in",

        stagger: 0.1
    })
}
 const RevealText2 = ({heading}: { heading: string }) => {
    const refs = useRef([])
useGSAP(()=>{
    const textContainer = document.querySelector('.text-container')
refs.current.forEach((el)=>{
    gsap.to(el,{
        stagger: 0.1,
        y: 0,
        yPercent: 0,

duration: 1,
        ease: "power1.in",
        scrollTrigger: {
            trigger: textContainer,
            id: 'abt-intro-section',

            start: '-=100vh',
            end: '-=40vh',
            scrub: true,

        }

})})}, {dependencies:[]})

    return (
<div className={' relative overflow-hidden flex text-container'}>
    {heading?.split('').map((word, i) => (
        <p style={{transform: 'translateY(200px)'}} className={'text-3xl lg:text-6xl  '} key={word + "_" + i} ref={el => {
            if (refs && refs.current) {
                refs.current.push(el as never);
            }
        }}>{word}</p>
    ))}
</div>
       )

}
export default RevealText2