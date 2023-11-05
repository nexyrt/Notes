import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import NotesBody from '../components/NotesBody.jsx'
import Heading from '../components/Heading.jsx'
import SearchNotes from '../components/SearchNotes.jsx'

const ReadNotes = ({ notes, onDelete }) => {
    return (
        <Layout>
            <SearchNotes />
            {/* Active Notes */}
            {
                notes.filter(note => note.isArchived === true).length === 0 ?
                    <h1 className="my-5 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">There's no Archive Notes!</h1>
                    :
                    <Heading isArchived={true} />
            }
            <div className='flex flex-wrap gap-x-3 gap-y-3'>
                {notes.map((note) => (
                    !note.isArchived ? <NotesBody {...note} onDelete={onDelete} key={note.id} /> : null
                ))}
            </div>
            {/* End of Active Notes */}
            {/* Archive Notes */}
            {
                notes.filter(note => note.isArchived === true).length === 0 ?
                    <h1 className="my-5 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">There's no Archive Notes!</h1>
                    :
                    <Heading isArchived={true} />
            }
            <div className='flex flex-wrap gap-x-3 gap-y-3'>
                {notes.map((note) => (
                    note.isArchived ? <NotesBody {...note} onDelete={onDelete} key={note.id} /> : null
                ))}
            </div>
            {/* End of Archive Notes */}
        </Layout>
    )
}

export default ReadNotes