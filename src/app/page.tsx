
import React from 'react';
import {Metadata} from "next";
import metaTag from "@/components/MetaTag";
import dynamic from "next/dynamic";
const Hero=dynamic(()=>import('@/components/sections/Hero/Hero'))
const First=dynamic(()=>import('@/components/sections/Hero/First'))
const Second=dynamic(()=>import('@/components/sections/Hero/second'))
const Third=dynamic(()=>import('@/components/sections/Hero/Third'))
export const metadata: Metadata =metaTag
const Page = () => {
    return (
        <div className={''}>

            <section className=" overflow-hidden h-screen w-full flex items-center relative  justify-center">
                <Hero/>

            </section>

            <section className="h-full  flex items-center relative  justify-center">
                <First/>

            </section>

            <section className="h-full w-full p-8">
                <Second/>

            </section>
            <section className=" w-full p-8">
                <Third/>

            </section>

        </div>

    );
};

export default Page;
