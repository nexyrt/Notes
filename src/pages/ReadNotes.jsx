import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import NotesBody from '../components/NotesBody.jsx'
import Heading from '../components/Heading.jsx'
import SearchNotes from '../components/SearchNotes.jsx'

const ReadNotes = ({ notes, onDelete, onSwitch }) => {
    return (
        <Layout>
            <SearchNotes notes={notes} onDelete={onDelete} onSwitch={onSwitch}/>
            {/* Active Notes */}
            {
                notes.filter(note => note.archived === false).length === 0 ?
                    <h1 className="my-5 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">There are no Active Notes!</h1>
                    :
                    <Heading archived={false} />
            }
            <div className='flex flex-wrap gap-x-3 gap-y-3'>
                {notes.map((note) => (
                    !note.archived ? <NotesBody {...note} onDelete={onDelete} onSwitch={onSwitch} key={note.id} /> : null
                ))}
            </div>
            {/* End of Active Notes */}
            {/* Archive Notes */}
            {
                notes.filter(note => note.archived === true).length === 0 ?
                    <h1 className="my-5 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">There are no Archive Notes!</h1>
                    :
                    <Heading archived={true} />
            }
            <div className='flex flex-wrap gap-x-3 gap-y-3'>
                {notes.map((note) => (
                    note.archived ? <NotesBody {...note} onDelete={onDelete} onSwitch={onSwitch} key={note.id} /> : null
                ))}
            </div>
            {/* End of Archive Notes */}
        </Layout>
    )
}

export default ReadNotes