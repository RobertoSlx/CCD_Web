import './Styles/App.css';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import EventsPage from './Pages/EventsPage';
import ExperiencePage from './Pages/ExperiencePage';

// Main App, inicializa las rutas del sitio

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact component={HomePage} />
            <Route path='/AboutPage' exact component={AboutPage} />
            <Route path='/EventsPage' exact component={EventsPage} />
            <Route path='/ExperiencePage' exact component={ExperiencePage} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
