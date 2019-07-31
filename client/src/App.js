import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Nav from "./components/Nav/Nav";
import './fontStyles.css'

function App() {
  return (
    <Router>
      <div>
        <Nav cartItems=""/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
