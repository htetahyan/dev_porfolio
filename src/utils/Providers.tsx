'use client'
import React from 'react';
import {ThemeProvider} from "next-themes";

import { type ThemeProviderProps } from "next-themes/dist/types";
import LenisScroller from "@/utils/LenisScroller";

const Providers = ({ children }: ThemeProviderProps) => (
    <ThemeProvider
attribute={'class'}
                   defaultTheme={'system'}
                   enableSystem
    >
        <LenisScroller>
        {children}
        </LenisScroller>
        </ThemeProvider>
);

export default Providers;
