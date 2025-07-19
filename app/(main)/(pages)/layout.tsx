import React from 'react'

interface Props {
    children: React.ReactNode;
}

export const layout = ({children}: Props) => {
    return (
        <div className='border-l-[1px] border-t-[1px] h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll'>
            <div className="w-full">{children}</div>
        </div>
    )
}

export default layout;