'use client'
import React, {forwardRef, useEffect} from 'react';
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/utils/utils";


const textVariants = cva(
    ' bg-transparent txt',{
        variants: {
          variant: {
              heading:'text-5xl md:text-8xl lg:text-10xl',
              subHeading:'text-2xl md:text-4xl lg:text-5xl',
              h1:'text-3xl ',
              h2:'text-2xl',
              h3:'text-xl',

          },
            background:{

                transparent:'bg-transparent'
            },
            wide:{
                normal:'tracking-tight',
                wide:'tracking-wide'
                ,wider:'tracking-wider',
                widest:'tracking-widest'
            },
            font:{
                primary:'font-primary',
                secondary:'font-secondary',
            },

defaultVariants: {
    variant: 'h1',
    wide: 'normal',
    font: 'primary',


}
        }
    }
)
interface TextProps extends React.ComponentProps<any>,VariantProps<typeof textVariants >{

    children?: React.ReactNode
}


const Text = forwardRef< HTMLParagraphElement, TextProps> (({children,variant,className,wide,font,...props},ref) => {



    return (
        <p {...props} className={cn(textVariants({variant,wide,font}),className+' text')} ref={ref}>
            {children}
        </p>
    );
})
Text.displayName='Text'

export {Text,textVariants};
