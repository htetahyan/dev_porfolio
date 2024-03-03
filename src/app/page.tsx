
import React from 'react';


import Hero from "@/components/sections/Hero/Hero";
import First from "@/components/sections/Hero/First";
import Second from "@/components/sections/Hero/second";
import Third from "@/components/sections/Hero/Third";
import AboutIntro from '@/components/sections/about/About_Intro';
const Page = () => {
    return (
        <div className={''}>
            <section className=" overflow-hidden h-screen w-full flex items-center relative  justify-center">
                <Hero/>

            </section>
            <section className=" w-full p-8">
                <AboutIntro/>

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
