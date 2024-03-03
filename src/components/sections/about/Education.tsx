'use client'
import React, {useRef} from 'react';
import {revealText, splitWords} from "@/animations/TextAnimation";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

const Education = () => {
    const rafs = useRef([]);
    useGSAP(()=>{
        revealText('.text-container', rafs)
        return () => {

          ScrollTrigger.killAll()
        }
    })
    return (
        <div className={'min-h-screen text-container relative items-center flex flex-wrap'}>
            {splitWords(phrase, ' -mx-1  text-xl md:text-2xl lg:text-3xl text ' +
                ' relative inline-block ', ' font-secondary relative opacity-30 inline-block', rafs)}

        </div>
    );
};

export default Education;
const phrase = "After the university situation in Myanmar became complicated in 2021, I decided to learn coding on my own. I explored various programming languages and started coding. It wasn't always easy, but I enjoyed the challenge. I also took some online courses to structure my learning and meet others interested in coding. These classes helped me understand coding better and apply it in real projects. I've been reading a lot of books on programming, which have deepened my understanding and introduced me to new tools and approaches. Overall, learning to code on my own has been an exciting journey, and I'm eager to keep learning and applying my skills in real-world projects."