import React from 'react'

const Heading = ({ archived }) => {
    const text = archived ? 'archived' : 'active'
    const bg = archived ? 'bg-yellow-400' : 'bg-blue-400'
    return (
        <h1 className="my-5 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Here are some <mark className={`px-2 text-white ${bg} rounded`}>{text}</mark> notes you made
        </h1>
    )

}

export default Heading