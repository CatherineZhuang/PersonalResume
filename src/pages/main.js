import React, { Component } from 'react';
import Particles from 'react-particles-js';
import mypic from '../assets/mypic.JPG';
import mylogo from '../assets/mylogo.png';
import Contact from '../components/Contact';
import Overview from '../components/Overview';
import CV from '../components/CV';
import Project from '../components/Project';
import Interest from '../components/Interest';


const particleConf = {
  particles: {
    number: {
      value: 120,
      desity: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      enable: false
    },
    shape: {
      stroke: {
        width: 3,
        color: "#A4C1D5"
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <img id='mypic' src={mypic} />
        <div id='intro'>
          <img id='mylogo' src={mylogo} />
          <Overview />
          <CV />
          <Project />
          <Interest />
          <Contact />
        </div>
        <Particles params={particleConf} />
      </div>
    );
  }
}

export default App;
