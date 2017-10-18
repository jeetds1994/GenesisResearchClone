import React, { Component } from 'react';
import './App.css';

import NavBar from './NavBar'
import Home from './Home/Home'
import About from './About_us/About_us'
import Services from './Services/Services'
import Industries from './Industries/Industries'
import Leadership from './Leadership'
import Careers from './Careers'

class App extends Component {
  constructor(){
    super()
    this.state = {
      activeSection: 'Home'
    }
  }

  changeSection = (e, { name }) => {
    this.setState({activeSection: name})
  }
  
  render() {
    return (
      <div className="App">
        <h3 className="white">This is a demo of Genesis Research.</h3>
        <NavBar activeSection={this.state.activeSection} changeSection={this.changeSection}/>
        {this.state.activeSection === "Home" && <Home />}
        {this.state.activeSection === "About Us" && <About />}
        {this.state.activeSection === "Services" && <Services />}
        {this.state.activeSection === "Industries" && <Industries />}
        {this.state.activeSection === "Leadership" && <Leadership />}
        {this.state.activeSection === "Careers" && <Careers />}
      </div>
    );
  }
}

export default App;
