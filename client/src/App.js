import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Main from "./pages/Main/";
import Donate from "./pages/Donate/";
import About from "./pages/About/";
import Impact from "./pages/Impact/";
// import HopePearls from "./pages/HopePearls";
import Gallery from "./pages/Gallery";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Sandbox from "./components/Sandbox";
import Wizard from "./components/Wizard"

import PrivateRoute from './components/Auth/PrivateRoute'

// components
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Donate/" component={Donate} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Impact" component={Impact} />
          <Route exact path="/hopepearls" component={Sandbox} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/programs" component={Programs} />
          <Route exact path="/blog" component={Wizard} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/loggedin" component={() => <h1>Logged In Successfully</h1>} />
          <Route exact path='/private' component={PrivateRoute} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
