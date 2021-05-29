import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Home/Navbar/Navbar';
import ApartmentDetails from './Components/Home/ApartmentDetails/ApartmentDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/details'>
          <Navbar/>
          <ApartmentDetails/>
        </Route>
      </Switch>
    </Router>

  );
};

export default App;



