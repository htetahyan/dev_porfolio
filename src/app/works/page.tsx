import React from 'react';
import Projects from "@/components/sections/Projects";
import {Metadata} from "next";
import metaTag from "@/components/MetaTag";
import {JsonLd} from "@/utils/Json-ld";
export const metadata: Metadata =metaTag
const Page = () => {
    return (
        <div className="h-full w-full flex items-center   bg-gray-200  justify-center relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLd) }}
            />
            <Projects/>
        </div>
    );
};

export default Page;
