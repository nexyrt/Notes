import React from 'react'

const SwitchButton = ({isArchived}) => {
    return isArchived ?
        <button type="button" className="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Re-Activate</button>
        :
        <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Archive</button>
}

export default SwitchButton