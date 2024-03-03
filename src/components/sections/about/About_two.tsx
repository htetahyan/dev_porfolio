'use client'
import React, { useRef} from 'react';
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {
    aws,
    gsapLogo,
    java,
    js,
    nextJsLogo, postgres,
    reactLogo,
    reduxLogo,
    springBoot,
    springSecurity, typeScriptLogo
} from "@/assets/abt/tech-stacks/exporter";
import {Text} from "@/components/Text";
const windowWidth = typeof window !== 'undefined' ? window.innerWidth :  0;
const circleRadius = windowWidth >  768 ? '250px' : '100px';
const AboutTwo = () => {
    const pageRef = useRef(null)
    useGSAP(() => {
        const tl=gsap.timeline({
            scrollTrigger: {
                trigger: pageRef.current,
                start: '-=50%',

                end: '-=20%',scrub: 1,


            }
        })
        tl.to('.abt-skills', {
            scale: 1,opacity: 1,
            duration: 1.2,
ease: 'power1.in',stagger: 0.1,

        })
        tl.to('.abt-two-circle',{

            scale: 1,opacity: 1,
            borderRadius: '50%',
            duration: 1.2,
            ease: 'power1.in',
        })
    },{scope: pageRef})
    return (
        <div ref={pageRef} className={'flex h-[80vh] lg:h-screen items-center page'}>

    <Skills />


        </div>
    );
};

export default AboutTwo;
// @ts-ignore
const skillShowcase = ({ name, Icon }: { name: string; Icon: any }) => (
    <div className={' flex flex-col items-center abt-skills opacity-0 scale-0 txt  '}>
        {Icon && <Icon className={' w-[15%] h-[15%] md:w-[10%] lg:w-[8%] lg:h-[8%]'} />}
        <Text  className={'text-[#0e1129] text-[0.9em] text-center w-fit'}>
            {name}
        </Text>
    </div>
);



const Skills = ( ) => {


    const skillComponents = Array.from({ length: skillsArray.length }).map((_, index) => (
        <div className={`w-fit h-fit absolute  `}
             key={index}
             style={{
                 transform: `rotate(${(360 / skillsArray.length) * index}deg) translate(${circleRadius }) rotate(${-(
                     (360 / skillsArray.length) * index
                 )}deg)`,
             }}
        >
            {skillShowcase({ name: skillsArray[index].name, Icon: skillsArray[index].Icon })}
        </div>
    ));

    return (
        <div className={'relative w-screen flex justify-center h-[60%] lg:h-[80%]  will-change-transform  items-center rounded-full  '}>
            {skillComponents}
            <div className={'w-48 h-48 scale-0 opacity-0 border-2 border-[#0e1129] flex justify-center items-center   abt-two-circle'}>
                STACKS
            </div>
        </div>
    );
}


Skills.displayName = 'Skills';
const skillsArray = [
    {
        name: 'AWS S3',
        Icon: aws
    },
    {
        name: 'GSAP',
        Icon: gsapLogo
    },
    {
        name: 'JavaScript',
        Icon: js
    },
    {
        name: 'React',
        Icon: reactLogo
    },
    {
        name: 'Redux',
        Icon:reduxLogo
    },
    {
        name: 'Next.js',
        Icon: nextJsLogo
    },
    {
        name: 'Java',
        Icon: java
    },
    {
        name: 'Spring Boot',
        Icon: springBoot
    },
    {
        name: 'Spring Security',
        Icon: springSecurity
    },
    {
        name: 'PostgreSQL',
        Icon: postgres
    },
    {
        name: 'TypeScript',
        Icon: typeScriptLogo
    },
    // Add more skills as needed

]