import React from 'react'

const NumberedCard = ({number ,title}) => {
    return (
        <div className="bg-cogAi-bg-dark m-2 rounded-md shadow-lg w-fill">
            <div className="text-white font-semibold text-4xl  flex justify-center m-4">
                {number}
            </div>
            <div className="text-gray-400 text-md  flex justify-center">
                {title}
            </div>
        </div>
    )
}

export default NumberedCard
