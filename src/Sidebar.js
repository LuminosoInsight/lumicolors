import React, { Component } from "react";
import _ from "lodash";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        {_.map(this.props.sourceColors, (sourceColor, index) => {
          return (
            <p key={index}>
              <span
                className="color-dot"
                style={{
                  background: sourceColor
                }}
              />{" "}
              {sourceColor}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
