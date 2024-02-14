'use client'
import React from 'react';
import { gsap } from "gsap";

import { Observer } from "gsap/dist/Observer";
import { useEffect } from "react";
import Image from "next/image";
import social from '@/assets/pngs/portal.png'
import {Text} from "@/components/Text";
import {Button} from "@/components/Button";
import {Icons} from "@/assets/SvgExporter";
const Projects = () => {
    useEffect(() => {
        gsap.registerPlugin(Observer);
        let sectionContainer = document.querySelector(".section-container");

        let sections = document.querySelectorAll(".section"),
            images = document.querySelectorAll(".bg"),
            outerWrappers = gsap.utils.toArray(".outer"),
            innerWrappers = gsap.utils.toArray(".inner"),
            currentIndex = -1,
            wrap = gsap.utils.wrap(0, sections.length),
            animating: boolean;

        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });

        function gotoSection(index: number, direction: number) {
            index = wrap(index); // make sure it's valid
            animating = true;
            console.log(index)
            gsap.to('.bg',{
                backgroundImage: bgColors[index],
                ease:'power1.in',
                duration:0.5
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
const {Scroll,Next} =Icons
    return (
        <div className={'h-full w-full projects-container'}>

            <section className="first section">

                <div className="outer">
                    <div className="inner">
                        <div className="bg justify-center relative p-2">

                            <div className={'flex flex-col justify-around h-3/4'}>
                                <Text variant={'heading'}>PORTAL</Text>
                                <Image src={social} className={' max-w-screen lg:max-w-[50vw]'} alt={''}/>

                                <Button variant={'ghost'}
                                        className={'text-2xl lg:hidden flex items-center justify-center'}>NEXT<Next
                                    className={'block max-w-8 max-h-8 lg:hidden'}/></Button>
                                <div
                                    className={'lg:absolute bottom-0 left-0 max-h-[15vh] max-w-fit mx-auto lg:left-[10%] lg:top-0 flex items-center'}>
                                    <div>{['S', 'C', 'R', 'O', 'L', 'L'].map((letter, index) => (
                                        <Text key={index}
                                              className={'text-lg md:text-xl lg:text-2xl text-center'}>{letter}</Text>
                                    ))}</div>
                                    <Scroll className={'max-w-32 max-h-96'}/>
                                </div>
                            </div>
                            <Next
                                className={'hidden lg:block max-w-10  right-0 lg:max-w-28 absolute lg:right-[10%] lg:top-0'}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="first section">

                <div className="outer">
                    <div className="inner">
                        <div className="bg justify-center relative">
                        <div className={'absolute left-[10%] top-0 flex items-center'}>
                                <div>{['S', 'C', 'R', 'O', 'L', 'L'].map((letter, index) => (
                                    <Text key={index} className={'text-2xl text-center'}>{letter}</Text>
                                ))}</div>
                                <Scroll className={'max-w-32'}/>
                            </div>
                            <div className={'flex flex-col justify-around h-3/4'}>
                                <Text variant={'heading'}>PORTAL</Text>
                                <Image src={social} className={' max-w-[50vw]'} alt={''}/>


                            </div>
                            <Next className={'max-w-28 absolute right-[10%] top-0'}/>
                        </div>
                    </div>
                </div>
            </section>

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