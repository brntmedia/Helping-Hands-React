import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import About from './components/Pages/About';
import ContactUs from './components/Pages/ContactUs';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
     <Router>
     <Navbar/>
       <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/About' component={About} />
        <Route path='/ContactUs' component={ContactUs} /> 
       </Switch>
     </Router>
    </>
      );
}

export default App;
