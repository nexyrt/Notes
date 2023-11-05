import React from 'react'

const ActiveDate = ({ isArchived, createdAt }) => {
    return isArchived
        ?
        <div className="mb-3 flex gap-x-3 font-normal text-gray-400">
            <svg xmlns="http:www.w3.org/2000/svg" className='w-5 h-5 fill-yellow-400' viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
            </svg>
            <p>{createdAt}</p>
        </div>
        :
        <div className="mb-3 flex gap-x-3 font-normal text-gray-400">
            <svg xmlns="http:www.w3.org/2000/svg" className='w-5 h-5 fill-green-400' viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
            </svg>
            <p>{createdAt}</p>
        </div>
}

export default ActiveDate