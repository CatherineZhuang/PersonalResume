import React, { Component } from "react";
import pdf from '../assets/resume.pdf';
import Tree from '../components/Tree';
 
class CV extends Component {
  render() {
    return (
      <div id='cv'>
        <p id="pfont"><a id="pfont" href={pdf}>CV</a> and My Journey</p>
        <div id='container'>
          <div id='activity'>
            <div id='item'>Georgia Tech Computer Science</div>
            <div id='item'>Georgia Tech Brain Lab</div>
            <div id='item'>Georgia Tech FIDO Lab</div>
            <div id='item'>Itential, LLC</div>
          </div>
          <div id='time'>
            <div id='item'>Aug 2016 - Present</div>
            <div id='item'>June 2018 - Present</div>
            <div id='item'>Oct 2017 -  Present</div>
            <div id='item'>Jan 2018 - Dec 2018</div>
          </div>
        </div>
        
      </div>
    );
  }
}
 
export default CV;