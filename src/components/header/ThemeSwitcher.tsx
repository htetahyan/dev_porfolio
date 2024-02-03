'use client'
import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import DarkIcon from '@/assets/Moon.svg';
import LightIcon from '@/assets/Sun.svg';
import Image from "next/image";
import {Button} from "@/components/Button";

const ThemeSwitcher = () => {
    const {setTheme,resolvedTheme} = useTheme()
    const [isRendered,setIsRendered] = useState(false)

    console.log(resolvedTheme)
    useEffect(()=>{
      setIsRendered(true);
    },[])
    if (!isRendered) return (
        <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={36}
            height={36}
            sizes="36x36"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
        />
    )

    if(resolvedTheme === 'light'){
        return <LightIcon className={'cursor-pointer w-full text-white text-3xl shadow-light'} y/>
    }

};

export default ThemeSwitcher;
