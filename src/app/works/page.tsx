import React from 'react';
import Projects from "@/components/sections/Projects";
import {Metadata} from "next";
import metaTag from "@/components/MetaTag";
export const metadata: Metadata =metaTag
const Page = () => {
    return (
        <div className="h-full w-full flex items-center   bg-gray-200  justify-center relative">
            <Projects/>
        </div>
    );
};

export default Page;
