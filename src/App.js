import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Login/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home></Home>
          
         
        </Route>

        <Route path="/login">
        <Login></Login>

        </Route>

      </Switch>
    </Router>

  );
};

export default App;



