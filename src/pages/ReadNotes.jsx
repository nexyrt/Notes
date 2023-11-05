import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import NotesBody from '../components/NotesBody.jsx'
import Heading from '../components/Heading.jsx'
import SearchNotes from '../components/SearchNotes.jsx'

const ReadNotes = ({ notes }) => {
    const active = notes.filter(note => note.isArchived)
    const archived = notes.filter(note => !note.isArchived)
    return (
        <Layout>
            <SearchNotes />
            {/* Active Notes */}
            {
                active.length == 0 ?
                    <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                        There's no Active Notes!
                    </h1>
                    :
                    <div>
                        <Heading isArchived={true} />
                        <div className='flex flex-wrap gap-x-3 gap-y-3'>
                            {notes.map((note) => (
                                !note.isArchived ? <NotesBody {...note} key={note.id} /> : null
                            ))}
                        </div>
                    </div>
            }

            {/* Archived Notes */}
            {
                archived.length == 0 ?
                    <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                        There's no Archived Notes!
                    </h1>
                    :
                    <div>
                        <Heading isArchived={false} />
                        <div className='flex flex-wrap gap-x-3 gap-y-3'>
                            {notes.map((note) => (
                                note.isArchived ? <NotesBody {...note} key={note.id} /> : null
                            ))}
                        </div>
                    </div>
            }
        </Layout>
    )
}

export default ReadNotes