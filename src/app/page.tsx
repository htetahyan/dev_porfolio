'use client'
import React from 'react';

import TransitionLink from "@/animations/CustomLink";



const Page = () => {


    return (

        <main className="bg-neutral-100 text-black  h-screen flex flex-col items-center justify-center gap-[50px]">
            <h1 className="text-5xl">HOME PAGE</h1>
            <TransitionLink href="/test" label="About ->" />
        </main>

    );
};

export default Page;
