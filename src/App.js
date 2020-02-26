import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/CustomNavbar';
import Indiafrica from './components/Indiafrica';
import SingleWork from './components/SingleWork';
import EventsHome from './components/EventsHome';
import StrategicCommunicationsHome from './components/StrategicCommunicationsHome';
import IdeasForPlacesHome from './components/IdeasForPlacesHome';
import BrandsHome from './components/BrandsHome';
import DavosHome from './components/DavosHome';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
          <Route path="/indiafrica" component={ Indiafrica } />
          <Route path="/EventsHome" component={ EventsHome } />
          <Route path="/StrategicCommunicationsHome" component={ StrategicCommunicationsHome } />
          <Route path="/BrandsHome" component={ BrandsHome } />
          <Route path="/IdeasForPlacesHome" component={ IdeasForPlacesHome } />
          <Route path="/DavosHome" component={ DavosHome } />
          <Route path="/:post_id" component={ SingleWork } />  
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
