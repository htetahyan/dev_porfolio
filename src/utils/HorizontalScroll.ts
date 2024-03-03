import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import React from "react";

import {useIsomorphicLayoutEffect} from "@/utils/useisomorphiclayouteffect";


export default function HorizontalScroll({wrapperRef, racesRef}:{wrapperRef: React.MutableRefObject<null>,racesRef:React.MutableRefObject<null>}) {

     const scrollAmount = (element: any) => {

         let elementWidth = element.scrollWidth;
         return -(elementWidth - window.innerWidth );
     };
useIsomorphicLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const tween = gsap.to(racesRef.current, {
        x: scrollAmount(racesRef.current),
        duration: 3,
        ease: "none",
    });

    ScrollTrigger.create({
        trigger:wrapperRef.current,
        start:"top 20%",
        end: () => `+=${scrollAmount(racesRef.current) * -1}`,
        pin:true,
        id:'races',

        animation:tween,
        scrub:true,
        immediateRender: false,
        invalidateOnRefresh:true,


    })
    return () => {
        ScrollTrigger.getById('races')?.kill();
    };
},[wrapperRef,racesRef])



}
