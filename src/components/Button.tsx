import React, {FC, forwardRef} from 'react';

import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/utils/utils";
const btnVariants = cva(
    'inline-block rounded-md  active:scale-95 transition-all rounded-md duration-300 ',
    {
        variants: {
variant: {
    primary: 'bg-blue-500 text-white font-bold py-2 px-4 rounded',
    secondary: 'bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded',
    danger: 'bg-red-500 text-white font-bold py-2 px-4 rounded',
    success: 'bg-green-500 text-white font-bold py-2 px-4 rounded',
    warning: 'bg-yellow-500  font-bold py-2 px-4 rounded',
    border: 'border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded',
    ghost: 'bg-transparent font-bold py-2 px-4 rounded hover:bg-gray-200 transition-all',
    link: 'text-blue-500 font-bold py-2 px-4 rounded'},
            size:{
    default: 'py-2 px-4',
    sm: 'py-1 px-2',
    lg: 'py-4 px-8'
            },
            font: {
                primary: 'primary-font',
                secondary: 'secondary-font ',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        }
}

)
interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> ,VariantProps<typeof btnVariants> {
children?: React.ReactNode;
}

const Button  = forwardRef< HTMLButtonElement, BtnProps> (({children,variant,className,font,size,...props},ref ) => {
    return (
        <button {...props} className={cn(btnVariants({variant,size,font}),className)} ref={ref}>
            {children}
        </button>
    );
})
Button.displayName='Button'



export {Button,btnVariants};
