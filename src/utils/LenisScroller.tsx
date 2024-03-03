import {ReactNode, useRef} from 'react';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {usePathname} from "next/navigation";

const LenisScroller = ({ children }: { children: ReactNode  }) => {

    const path=usePathname()


  const {  } =  useGSAP(( ) => {
        gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis()



      lenis.on('scroll', ScrollTrigger.update)
const updateScroll = (time:number) => {
    lenis.raf(time * 200)
}
      gsap.ticker.add(updateScroll)

      gsap.ticker.lagSmoothing(0)
      //horizontal
        // Cleanup on unmount
        return () => {
gsap.ticker.remove(updateScroll)

        };

    }, [path]);


    return <>{children}</>;
};

export default LenisScroller;
