import React from 'react';

import dynamic from "next/dynamic";
import AboutOne from "@/components/sections/about/About_One";
import {Text} from "@/components/Text";
import Abt from "@/components/sections/about/abt";
import Education from "@/components/sections/about/Education";
import AbtHEADING from "@/components/sections/about/AboutPageWrapper";
import Certificates from "@/components/sections/about/Certificates";
import Contact from "@/components/Contact";


const AboutTwo=dynamic(()=> import('@/components/sections/about/About_two'),{ssr: false})
const About = () => {
    return (
        <div className={'h-fit relative w-screen overflow-hidden'}>
            <div className={' w-full p-4'}>
                <Abt/>

            </div>
            <div className={'h-full w-full p-4 lg:p-8'}>
            <div className={' w-full   h-fit '}>
                <AbtHEADING heading={'01/'}/>
                <AboutOne/>
            </div>
            <div className={' w-full  overflow-hidden h-fit '}>
                <AbtHEADING heading={'02/'}/>

                <AboutTwo/>
            </div>
            <div className={' w-full relative h-fit '}>
                <AbtHEADING heading={'03/'}/>
                <Education/>
            </div>
            <div className={' w-full relative h-fit '}>
                <AbtHEADING heading={'04/'}/>
                <Certificates/>
            </div>
                <div className={' w-full relative h-fit '}>
                    <AbtHEADING heading={'CONTACT/'}/>
                    <Contact/>
                </div>
            </div>
        </div>
    );
};

export default About;
