import React from 'react'

interface Props {

}

const Settings
    = (props: Props) => {
        return (
            <div className='flex flex-col gap-4'>
                <h1 className='sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg '><span>Settings</span></h1>
                <div className="flex flex-col gap-100 p-6 "></div>
            </div>
        )
    }

export default Settings

