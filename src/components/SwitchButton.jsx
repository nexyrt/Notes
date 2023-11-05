import React from 'react'

const SwitchButton = ({id, archived, onSwitch}) => {
    const text = archived ? 'Re-Activate' : 'Archived';
    const bg = archived ? 'bg-green-400' : 'bg-yellow-400';
    const bgHover = archived ? 'hover:bg-green-500' : 'hover:bg-yellow-500';
    return (
        <button type="button" onClick={() => onSwitch({id})} className={`focus:outline-none text-white ${bg} ${bgHover} focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}>{text}</button>
    )}

export default SwitchButton