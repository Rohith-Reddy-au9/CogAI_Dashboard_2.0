import React from 'react'
import NumberedCard from '../NumberCards/NumberedCard'
import SelectCard from '../SelectCards/SelectCard'

export const NotificationAndStatus = () => {
    return (
            <div className=" grid grid-rows-1/4 gap-4" id="block1">
          <div className="grid grid-cols-4" id="block10">
            <NumberedCard number={45} title="Unresolved" />
            <NumberedCard number={45} title="Unresolved" />
            <NumberedCard number={45} title="Unresolved" />
            <NumberedCard number={45} title="Unresolved" />
          </div>
          <div
            className="bg-cogAi-bg-dark rounded-lg shadow-lg divide-y  divide-gray-400 space-y-2"
            id="block11"
          >
            <SelectCard title="Operator Analytics" time="12:00pm" />
            <SelectCard title="Operator Analytics" time="12:00pm" />
            <SelectCard title="Operator Analytics" time="12:00pm" />
            <SelectCard title="Operator Analytics" time="12:00pm" />
            <SelectCard title="Operator Analytics" time="12:00pm" />
            <SelectCard title="Operator Analytics" time="12:00pm" />
            <SelectCard title="Operator Analytics" time="12:00pm" />
            <SelectCard title="Operator Analytics" time="12:00pm" />
            <SelectCard title="Operator Analytics" time="12:00pm" />
          </div>
        </div>
    )
}

