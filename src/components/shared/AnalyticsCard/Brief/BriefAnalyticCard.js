import React from 'react'

const BriefAnalyticCard = ({percentage , title,color }) => {
    return (
    <div className={`box-border text-white `}>
        <div className="text-2xl pt-3 customclass">
            {percentage} %
        </div>
        <div className="pt-3 text-xl">
            {title}
        </div>
    </div>
    )
}

export default BriefAnalyticCard
