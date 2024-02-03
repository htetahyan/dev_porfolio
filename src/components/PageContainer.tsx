import React, {FC} from 'react';
interface props{
    children?:React.ReactNode,
    className?:string
}
const PageContainer : FC<props> = ({children,className}) => {
    return (
        <div className={'min-h-[80vh] ' + className }>
            {children}
        </div>
    );
};

export default PageContainer ;