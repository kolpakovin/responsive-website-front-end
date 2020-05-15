import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Features from './components/features/features';
import WorkExamples from './components/work-examples/work-examples'
import Product from './components/product/product';
import ContactUs from './components/contact/contact'

const App = props => {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Product />
            <Features />
            <WorkExamples />
            <ContactUs />
            <h2> Bla Bla</h2>
            <h2> Bla Bla</h2>
            <h2> Bla Bla</h2>
            <h2> Bla Bla</h2>
            <h2> Bla Bla</h2>
            <h2> Bla Bla</h2>
            <h2> Bla Bla</h2>
            <h2> Bla Bla</h2>
            <h2> Bla Bla</h2>
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
