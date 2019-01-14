import React, { Component } from 'react';
import pdf from '../assets/resume.pdf';
import GT from './cv/GT';
import Brain from './cv/Brain';
import FIDO from './cv/FIDO';
import Itential from './cv/Itential';

class CV extends Component {
  render() {
    return (
      <div id="cv">
        <p id="pfont">
          <a id="pfont" href={pdf}>
            CV
          </a>{' '}
          and My Journey
        </p>
        <div id="container">
          <div id="time">
            <div id="item">Aug 2016 - Present</div>
            <div id="item">June 2018 - Present</div>
            <div id="item">Oct 2017 - Present</div>
            <div id="item">Jan 2018 - Dec 2018</div>
          </div>
          <div id="activity">
            <GT />
            <Brain />
            <FIDO />
            <Itential />
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
