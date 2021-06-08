import React from 'react'

const SelectCard = ({icon,title, time}) => {
    return (
        <div className="m-2 h-20" >
        <div className="flex justify-between align-middle  mx-6 my-4">
            <div>
                <h1 className="text-lg text-white">{title}</h1>
            </div>
            <div>
                <h1 className="text-blue-700 ">{time}</h1>
            </div>
        </div>
        </div>
    )
}

export default SelectCard
