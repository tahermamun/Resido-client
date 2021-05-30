import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// Redux path
import { Provider } from 'react-redux'
import store from './Redux/store'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import ApartmentDetails from './Components/Home/ApartmentDetails/ApartmentDetails'
import Navbar from './Components/Home/Navbar/Navbar';


const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;






// const handleFileChange = (event) => {
//   console.log(event.target.files)
//   const imageData = new FormData()
//   imageData.set('key', '59b9f92bf1b5d3036dd00cceba773135')
//   imageData.append('image', event.target.files[0])

//   axios.post('https://api.imgbb.com/1/upload', imageData)
//       .then(function (response) {
//           setImageURL(response.data.data.display_url);
//       })
//       .catch(function (error) {
//       });
// }

