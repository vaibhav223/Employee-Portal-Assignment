import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Update from './Pages/Update';
import Create from './Pages/Create';
import Header from './Pages/Header';
import NotFound from './Pages/404.js';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/createemp" component={Create} />
        <Route path="/updateemp/:id" component={Update} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
