import React from 'react'

const Heading = ({isArchived}) => {
    return isArchived
        ?
        <h1 className="my-5 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Here are some <mark className="px-2 text-white bg-yellow-400 rounded dark:bg-yellow-500">archived</mark> notes you made
        </h1>
        :
        <h1 className="my-5 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Here are some <mark className="px-2 text-white bg-blue-400 rounded dark:bg-blue-500">active</mark> notes you made
        </h1>
}

export default Heading