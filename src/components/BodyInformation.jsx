import React from 'react'

const BodyInformation = () => {
    return (
        <>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {body}
            </p>
        </>

    )
}

export default BodyInformation