import React, { Component } from 'react';
import brain from '../../assets/brain.png';
import ToolTip from 'react-portal-tooltip';

class Brain extends Component {
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
      <div>
        <div id="item2">
          <a
            onMouseEnter={this.showTooltip.bind(this)}
            onMouseLeave={this.hideTooltip.bind(this)}
          >
            {' '}
            Georgia Tech Brain Lab{' '}
          </a>
        </div>
        <ToolTip
          active={this.state.isTooltipActive}
          arrow="center"
          parent="#item2"
        >
          <div>
            <img src={brain} width="200" height="200" />
            <p id="content">My BRAIN :) </p>
          </div>
        </ToolTip>
      </div>
    );
  }
}

export default Brain;
