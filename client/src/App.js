import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Notes from './components/Notes'
import Create from './components/CreateNote'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Router>
    </div>
  );
}

export default App;
