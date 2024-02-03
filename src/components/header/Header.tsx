import React from 'react';
import {Text} from "@/components/Text";
import {Button} from "@/components/Button";
import ThemeSwitcher from "@/components/header/ThemeSwitcher";

const Header = () => {
    return (

        <header className={'  h-[10vh] mix-blend-difference fixed  flex items-center justify-between p-4 px-8  top-0 z-20'}>
   <Text variant={'h1'} className={'logo mix-blend-difference text-white '} font={'primary'}>HAY</Text>

        <div   className={'text-3xl'}>
            <ThemeSwitcher/>
        </div>

        </header>
    );
};

export default Header;
