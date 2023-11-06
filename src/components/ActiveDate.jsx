import React from 'react'
import { showFormattedDate } from '../utils';

const ActiveDate = ({ archived, createdAt }) => {
    const fill = archived ? 'fill-yellow-400' : 'fill-green-400';
    return (
        <div className="mb-3 flex gap-x-3 font-normal text-gray-400">
            <svg xmlns="http:www.w3.org/2000/svg" className={`w-5 h-5 ${fill}`} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
            </svg>
            <p>{showFormattedDate(createdAt)}</p>
        </div>
    )
}

export default ActiveDate