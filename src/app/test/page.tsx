'use client'
import React from 'react';



import TransitionLink from "@/animations/CustomLink";

const MyComponent = () => {

    return (
        <main className="bg-neutral-100 text-black  h-screen flex flex-col items-center justify-center gap-[50px]">
            <h1 className="text-5xl">HOME PssAGE</h1>
            <TransitionLink href="/" label="About ->" />
        </main>

    );
};

export default MyComponent;
