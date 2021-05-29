import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Login/Login';

import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import ApartmentDetails from './Components/Home/ApartmentDetails/ApartmentDetails'
import Navbar from './Components/Home/Navbar/Navbar';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path='/details'>
          <Navbar />
          <ApartmentDetails />
        </Route>
        <Route path='/dashboard/:panel'>
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </Router>

  );
};

export default App;



