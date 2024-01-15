
"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/animations/PageAnimate";
import {useTheme} from "next-themes";
import {usePathname} from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        animatePageIn();
    }, []);

    return (
        <div className={'relative max-h-screen overflow-hidden'}>
            <div
                id="transition-element-1"
                className="w-screen h-screen bg-gray-300 z-50 fixed top-0 left-0"
            >H</div>
            <div
                id="transition-element-2"
                className="w-screen  h-screen bg-black z-50 fixed top-[10vh] left-0"
            ></div>
            <div
                id="transition-element-1"
                className="w-screen h-screen bg-gray-300 z-50 fixed top-[20vh] left-0"
            ></div> <div
            id="transition-element-2"
            className="w-screen  h-screen bg-black z-50 fixed top-[30vh] left-0"
        ></div>
            <div id='transition-element-1' className="w-screen h-screen bg-gray-300 z-50 fixed top-[40vh] left-0"></div>
            <div id='transition-element-2' className="w-screen  h-screen bg-black z-50 fixed top-[50vh] left-0"></div>
            <div id='transition-element-1' className="w-screen h-screen bg-gray-300 z-50 fixed top-[60vh] left-0"></div>
            <div id='transition-element-2' className="w-screen  h-screen bg-black z-50 fixed top-[70vh] left-0"></div>
            <div id='transition-element-1' className="w-screen h-screen bg-gray-300 z-50 fixed top-[80vh] left-0"></div>
            <div id='transition-element-2' className="w-screen  h-screen bg-black z-50 fixed top-[90vh] left-0"></div>




            {children}
        </div>
    );
}
