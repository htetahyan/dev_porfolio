import React from 'react';
import Projects from "@/components/sections/Projects";
import {Metadata} from "next";
export const metadata :Metadata = {
    title: 'My works',
    keywords: ['htetahyan', 'htetahyan.vercel.app', 'htetahyan.com','htetahyan portfolio','next','htet ah yan', 'my works'],

    alternates: {
        canonical: '/works',
    }
}
const Page = () => {
    return (
        <div className="h-full w-full flex items-center   bg-gray-200  justify-center relative">
            <Projects/>
        </div>
    );
};

export default Page;