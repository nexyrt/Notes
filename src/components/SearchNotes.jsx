import React, { Component } from 'react'
import NotesBody from './NotesBody';

export default class SearchNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
        };
    }

    render() {
        const filteredNotes = this.props.notes.filter((note) =>
            note.title.toLowerCase().includes(this.state.searchText.toLowerCase())
        );

        return (
            <>
                <form className='mb-3'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            value={this.state.searchText}
                            onChange={(e) => this.setState({
                                searchText: e.target.value,
                            })}
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search by Title"
                            required
                        />
                    </div>
                </form>
                <h3 className="my-5 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Search Results</h3>
                {
                    filteredNotes.length > 0 && this.state.searchText.length > 0 ?
                        filteredNotes.map((note) => (
                            <NotesBody {...note} onDelete={this.props.onDelete} onSwitch={this.props.onSwitch} key={note.id} />
                        )) : <p>Tidak ada catatan</p>
                }
            </>

        )
    }
}
