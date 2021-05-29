import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/dashboard/:panel'>
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </Router>

  );
};

export default App;



