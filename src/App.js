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
import ContactUs from './components/contact/contact';
import Network from './components/network/network';
import Footer from './components/footer/footer'

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
            <Network />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
