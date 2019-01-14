import React, { Component } from 'react';
import fido from '../../assets/fido.jpg';
import ToolTip from 'react-portal-tooltip';

class FIDO extends Component {
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
        <div id="item3">
          <a
            onMouseEnter={this.showTooltip.bind(this)}
            onMouseLeave={this.hideTooltip.bind(this)}
          >
            Georgia Tech FIDO Lab
          </a>
        </div>
        <ToolTip
          active={this.state.isTooltipActive}
          arrow="center"
          parent="#item3"
        >
          <div>
            <img src={fido} width="200" height="150" />
            <p id="content">Vest for working dogs</p>
          </div>
        </ToolTip>
      </div>
    );
  }
}

export default FIDO;
