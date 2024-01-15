import React from 'react';
import {Text} from "@/components/Text";
import {Button} from "@/components/Button";
import ThemeSwitcher from "@/components/header/ThemeSwitcher";

const Header = () => {
    return (

        <header className={'dark:bg-dark  h-[10vh] sticky top-0 flex items-center justify-between p-4 px-8  top-0 z-20'}>
   <Text variant={'h1'} font={'primary'}>h</Text>

        <Button   className={'dark:bg-white bg-transparent  bg-dark text-3xl'}>
            <ThemeSwitcher/>
        </Button>

        </header>
    );
};

export default Header;
