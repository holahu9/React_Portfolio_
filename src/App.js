import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import './App.css';
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
//import Media from "./components/Media";
function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Nav />
          <Route exact path="/" component={Banner} />
          <Route exact path="/home" component={Banner} />
          <Route exact path="/portfolio" component={Portfolio}/>
          
      <Footer />
    </Router>
  );
}

export default App;
