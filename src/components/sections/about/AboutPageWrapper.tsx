'use client'
import React, { useEffect } from 'react';
import { Text } from "@/components/Text";
import { gsap } from "gsap";

const AbtHEADING = ({ heading }:{heading:string}) => {
    // Prepend 'a' to the id to make it a valid CSS selector




    return (
        <div className={`  overflow-hidden w-full flex abt-section-text`}
        >
            {heading.split('').map((t, i) => (
                <Text key={i} className={` text-8xl translate-y-[400px] opacity-0 will-change-auto`}>
                    {t}
                </Text>
            ))}
        </div>
    );
};

export default AbtHEADING;
