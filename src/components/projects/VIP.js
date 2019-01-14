import React, { Component } from 'react';
import vip from '../../assets/vip.png';
import ToolTip from 'react-portal-tooltip';

class VIP extends Component {
  state = {
    isTooltipActive: false
  };
  showTooltip() {
    this.setState({ isTooltipActive: true });
  }
  hideTooltip() {
    this.setState({ isTooltipActive: false });
  }
  render() {
    return (
      <div id="projectEntry">
        <img id="vip" src={vip} />
        <div id="entry">
          <a
            id="projectTitle"
            href="http://www.vip.gatech.edu/teams/intelligent-tutoring-system"
          >
            Intelligent Tutoring System
          </a>
          <p id="content">
            I worked on tranferring Matlab graphs to Web-based GUI and database
            design for an online learning system ITS@GT
          </p>
          <button
            id="vipbtn"
            onMouseEnter={this.showTooltip.bind(this)}
            onMouseLeave={this.hideTooltip.bind(this)}
          >
            Details
          </button>
          <ToolTip
            active={this.state.isTooltipActive}
            position="bottom"
            arrow="center"
            parent="#vipbtn"
          >
            <div>
              <p id="content">
                I was involved in the development of ITS@GT, which is an online
                learning platform for Electrical Engineering students to do lab
                assignments and get automatic feedbacks.
              </p>
              <p id="content">
                The graphs are currently in Matlab so I worked on transferring
                the graphs from Matlab to Web-based GUIs.{' '}
              </p>
              <p id="content">
                I also helped designing the architecture of the database and
                made a proof of concept for the system database.
              </p>
            </div>
          </ToolTip>
        </div>
      </div>
    );
  }
}

export default VIP;
