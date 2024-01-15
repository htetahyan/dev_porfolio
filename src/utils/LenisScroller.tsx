"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

const LenisScroller = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactLenis root options={{ smooth: true,lerp: 0.1, duration: 1,paused: true}} >
            {children}
        </ReactLenis>
    );
};

export default LenisScroller;
