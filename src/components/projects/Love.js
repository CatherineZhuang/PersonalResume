import React, { Component } from "react";
import love from '../../assets/love.png';
import ToolTip from 'react-portal-tooltip';
 
class Love extends Component {
  state = {
    isTooltipActive: false
  }
  showTooltip() {
    this.setState({isTooltipActive: true})
  }
  hideTooltip() {
    this.setState({isTooltipActive: false})
  }
  render() {
    return (
        <div id='projectEntry'>
            <img id='love' src={love} />
            <div id='entry'>
            <a id='projectTitle' href="https://mylivelove.com">Project Live Love</a>
            <p id='content'>My team and I made a website for a non-profit organization Project Live Love for their volunteers to sign up events.</p>
            <button id='lovebtn' onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>Details</button>
            <ToolTip active={this.state.isTooltipActive} position="bottom" arrow="center" parent="#lovebtn">
                <div>
                    <p id='content'>Project Live Love is an non-profit organization that organizes voluteering events.</p>
                    <p id='content'>They requested for a website for voluteers to login and sign up for events that they are interested in.</p>
                    <p id='content'>In this project, I worked on designing the website frontend and implemented the registration feature of the website.</p>
                </div>
            </ToolTip>
            </div>
        </div>
    );
  }
}
 
export default Love;