import React, { Component } from 'react'
import Layout from '../components/Layout';

export default class AddNotes extends Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const newValue = event.target.value;
    if(newValue.length <= 50 && newValue.length >= 0) {
      this.setState(() => {
        return {
          title: newValue,
        }
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAdd(this.state);
  }

  render() {
    const remainingChar = 50 - this.state.title.length;
    return (
      <Layout>
        <form className='flex flex-col gap-y-5 px-5' onSubmit={this.onSubmitEventHandler}>
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input value={this.state.title} onChange={this.onTitleChangeEventHandler}  type="text" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Type some title" required />
            {
              remainingChar < 50 ?
              <p>Remaining Character : {remainingChar}</p> : null
            }
          </div>
          <div>
            <label htmlFor="notes_body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notes Body</label>
            <textarea id="notes_body" value={this.state.body} onChange={this.onBodyChangeEventHandler} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter some notes"></textarea>
          </div>
          <button type="submit" className="text-white w-fit self-end bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add notes</button>
        </form>
      </Layout>

    )
  }
}
