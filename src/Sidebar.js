import React, { Component } from "react";
import _ from "lodash";

import ColorPicker from "./ColorPicker";

class Sidebar extends Component {
  render() {
    const rowStyles = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: ".25rem 0"
    };

    return (
      <div className="sidebar">
        <button onClick={this.props.addOrUpdateColor}>Add column</button>
        {_.map(_.orderBy(this.props.colors, "id", "desc"), (color, index) => {
          return (
            <div key={index} style={rowStyles}>
              <ColorPicker
                color={color}
                addOrUpdateColor={this.props.addOrUpdateColor}
              />
              <div style={{ flex: 1, padding: "0 .5rem" }}>{color.hex}</div>
              <div>
                <button
                  onClick={() => {
                    this.props.removeColumn(color);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
