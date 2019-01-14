import React, { Component } from "react";
import VIP from './projects/VIP';
import Hack from './projects/Hack';
import Love from './projects/Love';
 
class Project extends Component {
  render() {
    return (
        <div id='project'>
            <p id="pfont">Fun Projects I Made</p>
            <VIP />
            <Hack />
            <Love />
        </div>
    );
  }
}
 
export default Project;