import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './css/index.css'
import {data} from './js/data'
import AddNotes from './pages/AddNotes';
import ReadNotes from './pages/ReadNotes';

class Index extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<ReadNotes notes={data} />} />
            <Route path="/add" element={<AddNotes />} />
          </Routes>
        </Router>
      </React.StrictMode>
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index/>)