'use client'
import React from 'react';
import PageContainer from "@/components/PageContainer";
import {Text} from "@/components/Text";
const Page = () => {

    return (
     <div className={'h-screen relative'}>
      <section className="h-full w-full flex items-center relative -top-16  justify-center">
 <div className='flex flex-wrap lg:block'>
    <Text variant={'subHeading'} className='px-2 '>One Stop Developer!</Text>
    {['Crafting Code,', 'Creating Connections!'].map((txt: string, index: number) => (
      <Text key={index} variant="heading" className={` font-primary uppercase  lg:text-center ${index===1 && 'text-end'} `} font="primary">
        {txt}
      </Text>
    ))}
</div>

</section>

     </div>

    );
};

export default Page;
