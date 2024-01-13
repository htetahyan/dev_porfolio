import React from 'react';
import {Button} from "@/components/Button";
import ThemeSwitcher from "@/components/header/ThemeSwitcher";
import Moon from '@/assets/Moon.svg';
import ParallaxEff from "@/utils/ParallaxEff";
import Image from "next/image";
import {Text} from "@/components/Text";


const Page = () => {
    return (
        <div className={'h-[300vh] dark:bg-dark bg-white'}>
            <ThemeSwitcher/>
            <ParallaxEff id={'parallax'}>
<Text variant={'h1'}>Hello</Text>
            </ParallaxEff>
            <h1 className={'text1'}>Hello</h1>
            <Button className={'dark:text-dark'}  variant="success"  size="sm">Hello</Button>
        </div>
    );
};

export default Page;
