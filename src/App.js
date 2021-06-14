import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Projectpage from "./Projectpage.js";
import Adminform from "./Adminform.js";
// import {Project} from "./components/project";
// import Header from "./components/header";
// import Filter from "./components/filter";

// import Data from "./data";

function App() {

  
  return (
    <div className="App">
    <Router>
    <Switch>
    {/* <Route exact path="/" render={()=><Projectpage/>}/>
    <Route exact path="/admin" render={()=><Adminform/>}/> */}
    <Route exact path="/" >
      <Projectpage/>
    </Route>
    <Route exact path="/admin">
      <Adminform/>
    </Route> 
    </Switch>
     </Router>
    </div>
  );
}

export default App;
