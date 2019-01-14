import React, { Component } from 'react';
import gt from '../../assets/gt.JPG';
import ToolTip from 'react-portal-tooltip';

class GT extends Component {
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
        <div id="item1">
          <a
            onMouseEnter={this.showTooltip.bind(this)}
            onMouseLeave={this.hideTooltip.bind(this)}
          >
            Georgia Tech Computer Science
          </a>
        </div>
        <ToolTip
          active={this.state.isTooltipActive}
          position="top"
          arrow="center"
          parent="#item1"
        >
          <div>
            <img src={gt} width="150" height="200" />
            <p id="content">Loving Buzz and Atlanta ever since!</p>
          </div>
        </ToolTip>
      </div>
    );
  }
}

export default GT;
