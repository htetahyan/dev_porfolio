'use client'
import React, {useEffect, useRef} from 'react';
import {useWindowSize} from "@studio-freight/hamo";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {gsap} from "gsap";

const ParallaxEff = ({ className, children, speed = 1, id = "parallax" }:{
    className?: string,
    children: React.ReactNode,
    speed?: number,
    id?: string
}) => {

    const trigger = useRef(null);

    const target = useRef(null);



    // @ts-ignore
    const { width: windowWidth } = useWindowSize();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const y = windowWidth * speed * 0.1;
        const setY = gsap.quickSetter(target.current, "y", "px");

       const timeLine = gsap.timeline({
            scrollTrigger: {
                id: id,
                trigger: trigger.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (e) => {
                    setY(e.progress * y);
                },
            },
        });

        return () => {
            timeLine.kill();
        };
    }, [id, speed, windowWidth]);

    return (

        <div ref={trigger} className={className}>

            <div ref={target}>{children}</div>

        </div>

    );

}

export default ParallaxEff;
