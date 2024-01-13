import React, {forwardRef} from 'react';
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/utils/utils";


const textVariants = cva(
    'dark:text-light text-dark transition-colors duration-300',{
        variants: {
          variant: {
              h1:'text-3xl ',
              h2:'text-2xl',
              h3:'text-xl',

          },
            wide:{
                normal:'tracking-tight',
                wide:'tracking-wide'
                ,wider:'tracking-wider',
                widest:'tracking-widest'
            },
            font:{
                primary:'primary-font',
                secondary:'secondary-font',
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


const Text = forwardRef< HTMLDivElement, TextProps> (({children,variant,className,wide,font,...props},ref) => {
    return (
        <div {...props} className={cn(textVariants({variant,wide,font}),className)} ref={ref}>
            {children}
        </div>
    );
})
Text.displayName='Text'

export {Text,textVariants};
