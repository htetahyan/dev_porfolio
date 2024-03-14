'use client'
import React from 'react';
import { gsap } from "gsap";

import { Observer } from "gsap/dist/Observer";

import {portal,yearbook,portal_2,report,report_2,social,social_2,yearbook_2,yearbook_3,yearbook_4,yearbook_5} from '@/assets/pngs/exporter';
import {Text} from "@/components/Text";


import Carousel from "@/components/Carousel";
import {useIsomorphicLayoutEffect} from "@/utils/useisomorphiclayouteffect";
import {Scroll} from "@/assets/SvgExporter";
const Projects = () => {
    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(Observer);
        let sectionContainer = document.querySelector(".section-container");
        let sections = document.querySelectorAll(".section"),
            images = document.querySelectorAll(".bg"),
            outerWrappers = gsap.utils.toArray(".outer"),
            innerWrappers = gsap.utils.toArray(".inner"),
            currentIndex = -1,
            wrap = gsap.utils.wrap(0, sections.length),
            animating: boolean;
      const projectTitle=document.querySelectorAll('.project-title')
        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });

        function gotoSection(index: number, direction: number) {
            index = wrap(index); // make sure it's valid
            animating = true;

            gsap.to('.bg',{
                backgroundImage: bgColors[index],
                ease:'power1.in',
                duration:0.5
            })
           projectTitle.forEach((pj,i)=> {
               gsap.to(pj,{
                   delay:1,
                   ease:'power1.in',
                   opacity: index ===i?1:0
               })
           })

            let fromTop = direction === -1,
                dFactor = fromTop ? -1 : 1,
                tl = gsap.timeline({
                    defaults: { duration: 1.25, ease: "power1.inOut" },
                    onComplete: () => {animating = false},
                });
            if (currentIndex >= 0) {
                // The first time this function runs, current is -1
                gsap.set(sections[currentIndex], { zIndex: 0 });

                tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
                    sections[currentIndex],
                    { autoAlpha: 0 },
                );
            }
            gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
            tl.fromTo(
                [outerWrappers[index], innerWrappers[index]],
                {
                    yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
                },
                {
                    yPercent: 0,
                },
                0,
            ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

            currentIndex = index;
        }

        const observerInstance =Observer.create({
            type: "wheel,touch,pointer",
            target: sectionContainer,

            wheelSpeed: -1,
            onDown: () => !animating && gotoSection(currentIndex - 1, -1),
            onUp: () => !animating &&  gotoSection(currentIndex + 1, 1),
            tolerance: 10,
            preventDefault: true,
        });
gotoSection(0,1)
        return () => {
            observerInstance.kill();
        }



    },[]);

    return (
        <div className={'h-full w-full projects-container'}>
            {ProjectsDatas.map((project, index) => (
                <section key={index} className="first section">

                    <div className="outer">
                        <div className="inner">
                            <div className="bg justify-center relative p-2">

                                <div className={'flex flex-col justify-center h-full'}>
                                    <Text variant={'heading'} className={'project-title opacity-0'}>{project.title}</Text>

                                    <div className={'w-screen  lg:w-[60vw]   '}>

                                        <Carousel
                                        images={project.assets}/>

                                    </div>

                                    <div
                                        className={'absolute bottom-[5%] lg:bottom-[10%] left-0 max-h-[15vh] max-w-fit mx-auto lg:left-[10%]  flex items-center'}>
                                        <div>{['S', 'C', 'R', 'O', 'L', 'L'].map((letter, index) => (
                                            <Text key={index}
                                                  className={'text-lg md:text-xl lg:text-2xl text-center'}>{letter}</Text>
                                        ))}</div>
                                        <Scroll className={'max-w-32 max-h-96'}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


            ))}


        </div>
    );
};

export default Projects;
const bgColors = ['linear-gradient(to right,  #F5F5F5,#FBD3CB,#FFFFFF)',
    'linear-gradient(to right,  #F5F5F5,#FFE7B3,#FFFFFF)',
    'linear-gradient(to right,  #F5F5F5,#B6ECF7,#FFFFFF)',
    'linear-gradient(to right,  #F5F5F5,#E8E2D9,#FFFFFF)',
    'linear-gradient(to right,  #F5F5F5,#FDD3E8,#FFFFFF)',
    'linear-gradient(to right,  #F5F5F5,#ECD9FA,#FFFFFF)',
    'linear-gradient(to right,  #F5F5F5,#FFE7B3,#FFFFFF)'
]
export const ProjectsDatas = [{
    title: 'PORTAL',
    description: 'a social media platform for developers',
    assets: [{type: 'image', src: portal}, {type: 'image', src: portal_2},
        {type: 'explanation', contributions:["setting up env configurations","integrated with aws s3 bucket"],  href: 'https://portal.edusnglobal.co.uk/',linkText:"Live URL"}],
},{
    title: 'EDUSOCIAL',
    description: 'a social media platform for developers',
    assets: [{type: 'image', src: social}, {type: 'image', src: social_2},
        {type: 'explanation', contributions:['integrated google adult content filter api', 'integrated google location api'], href: 'https://edusnsocial.com/',linkText:"Live URL"}],
},{
    title: 'YEARBOOK',
    description: 'Yearbook website for students',
    assets: [{type: 'image', src: yearbook}, {type: 'image', src: yearbook_2},{type: 'image', src: yearbook_3},
        {type: 'image', src: yearbook_4},{type: 'image', src: yearbook_5},
        {type: 'explanation', contributions:['spring security authentication with otp base register', 'integrated with aws s3 bucket',
                'implemented like and comment feature on yearbook cards!',  'implemented rtk query with next js front end'],  href: 'https://yearbook.edusnglobal.co.uk/',linkText:"Live URL"}],
},{
    title: 'REPORT',
    description: 'Yearbook website for students',
    assets: [{type: 'image', src: report}, {type: 'image', src: report_2},

        {type: 'explanation', contributions:[ 'secured API with Spring security',
                'implemented rtk query with next js front end','deploy on vps server'],linkText:"link is confidential"}],
}]
export type ProjectDATA = typeof ProjectsDatas
