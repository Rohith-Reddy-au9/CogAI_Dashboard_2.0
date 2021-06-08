import React from 'react'

export const IconButton = ({name,children}) => {
    return (
        <div className="flex bg-cogAi-bg-dark mx-4 shadow-lg">
            <div className="grid self-center">
                {children}
            </div>
            <div className="bg-white text-gray-700 font-bold flex flex-wrap w-15 h-15">
                <div className="text-sm justify-center m-2">
                {name}
                </div>
            </div>
        </div>
    )
}
