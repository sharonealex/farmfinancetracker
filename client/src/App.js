import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import Header from './components/Header';
//import Footer from './components/Footer';

function App() {
  return (
    <Router>
       <div className="flex-column justify-flex-start min-100-vh">
       <Header/>
       </div> 
       </Router>
     
  )
}

export default App;
