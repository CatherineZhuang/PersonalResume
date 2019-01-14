import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';

class Itential extends Component {
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
        <div id="item4">
          <a
            onMouseEnter={this.showTooltip.bind(this)}
            onMouseLeave={this.hideTooltip.bind(this)}
          >
            Itential, LLC
          </a>
        </div>
        <ToolTip
          active={this.state.isTooltipActive}
          position="bottom"
          arrow="center"
          parent="#item4"
        >
          <div>
            <p id="content">First Job! (well, Co-op...)</p>
          </div>
        </ToolTip>
      </div>
    );
  }
}

export default Itential;
