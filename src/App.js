import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import Resume from "./pages/Resume"
import About from "./pages/About"

// import Headshot from './assets/Headshot'

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title: "Robert Poston",
        headerLinks: [
          { title: "Home", path: "/"},
          { title: "About", path: "/about"},
          { title: "Contact", path: "/contact"},
        ],
        home: {
          title: "Full Stack Web Developer",
          subTitle: "Check out my projects below",
          lead: "Click for more information or email me at robertallenposton@gmail.com"
        },
        about: {
          title: "About Me",
          headshot: ""
        },
      }
    }


  render() {

    return (
      <Router>
        <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Robert</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/resume">Resume</Link>
              <Link className="nav-link" to="/about">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={
                  () => <Homepage
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  lead={this.state.home.lead}
                />}
        />
        <Route path="/resume" exact render={
                  () => <Resume
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  lead={this.state.home.lead}
                />}
        />
        <Route path="/about" exact render={
                  () => <About
                  title={this.state.about.title}
                  headshot={this.state.about.headshot}
                />}
        />
        <Footer />
        </Container>
      </Router>
    );

}}
export default App;
