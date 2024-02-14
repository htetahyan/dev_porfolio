import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const LenisScroller = ({ children }: { children: React.ReactNode }) => {
  const { context, contextSafe } =  useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(4, -10 * t)),

            lerp: 0.05,
        });



        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 500);
        });

//horizontal

        // Cleanup on unmount
        return () => {

            lenis.off('scroll', ScrollTrigger.update);
         gsap.ticker.sleep()
        };
    }, []);


    return <>{children}</>;
};

export default LenisScroller;
