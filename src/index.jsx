import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './css/index.css'
import { data } from './js/data'
import AddNotes from './pages/AddNotes';
import ReadNotes from './pages/ReadNotes';

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: data
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSwitchHandler = this.onSwitchHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onDeleteHandler(id) {
    console.log(id)
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body }) {
    const currentDate = new Date();
    const options = { month: 'long' };
    const monthName = currentDate.toLocaleString('en-US', options);
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: `${currentDate.getDate()} ${monthName}, ${currentDate.getFullYear()}`
          }
        ]
      }
    });
  }

  onSwitchHandler({ id }) {
    const updatedNotes = [...this.state.notes];
    const noteToToggle = updatedNotes.find((note) => note.id === id);

    noteToToggle.archived = !noteToToggle.archived;

    this.setState({
      notes: updatedNotes,
    });
  }

  render() {
    return (
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<ReadNotes notes={this.state.notes} onDelete={this.onDeleteHandler} onSwitch={this.onSwitchHandler} />} />
            <Route path="/add" element={<AddNotes onAdd={this.onAddNotesHandler} />} />
          </Routes>
        </Router>
      </React.StrictMode>
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index />)