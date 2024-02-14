'use client'
import React, {useState} from 'react';
import {ThemeProvider} from "next-themes";

import { type ThemeProviderProps } from "next-themes/dist/types";
import LenisScroller from "@/utils/LenisScroller";
import AnimationState from "@/context/AnimationState";


const Providers = ({ children }: ThemeProviderProps) => {
    const [isAnimating, setIsAnimating] = useState(true);

    return (<ThemeProvider
            attribute={'class'}
            defaultTheme={'system'}
            enableSystem
        >
            <AnimationState.Provider value={{setIsAnimating, isAnimating}}>
                <LenisScroller>
                    {children}
                </LenisScroller>
            </AnimationState.Provider>
        </ThemeProvider>

    );
}
export default Providers;
