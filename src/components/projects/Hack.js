import React, { Component } from 'react';
import note from '../../assets/note.png';
import team from '../../assets/teammate.JPG';
import ToolTip from 'react-portal-tooltip';

class Hack extends Component {
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
        <img id="note" src={note} />
        <div id="entry">
          <a id="projectTitle" href="https://github.com/icpm/HackCat">
            Automated Note Generator
          </a>
          <p id="content">
            I learned Android frontend development and NLP concepts during
            HackGT 2017
          </p>
          <button
            id="notebtn"
            onMouseEnter={this.showTooltip.bind(this)}
            onMouseLeave={this.hideTooltip.bind(this)}
          >
            Details
          </button>
          <ToolTip
            active={this.state.isTooltipActive}
            position="bottom"
            arrow="center"
            parent="#notebtn"
          >
            <div>
              <p id="content">
                Automated Note Generator is an Android Application that can
                recognize typed and hand-written words, detect and convert
                recorded audio to text, and integrate all data into organized
                text
              </p>
              <p id="content">
                During the experience, I learned a lot about image recognition
                and natural language processing.
              </p>
              <p id="content">Most Importantly, I met wonderful teammates.</p>
              <img src={team} width="220" height="170" />
            </div>
          </ToolTip>
        </div>
      </div>
    );
  }
}

export default Hack;
