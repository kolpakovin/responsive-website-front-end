import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/navbar/navbar';

const App = props => {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Switch>
          <Route path="/">
            <h2>Hello World</h2>
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
    </div >
  );
}

export default App;
