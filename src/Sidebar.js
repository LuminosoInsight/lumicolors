import React, { Component } from "react";
import _ from "lodash";

import ColorPicker from "./ColorPicker";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <button onClick={this.props.addOrUpdateColor}>Add column</button>
        {_.map(_.orderBy(this.props.colors, "id", "desc"), (color, index) => {
          return (
            <div key={index}>
              <ColorPicker
                color={color}
                addOrUpdateColor={this.props.addOrUpdateColor}
              />
              <span
                className="color-dot"
                style={{
                  background: color.hex
                }}
                onClick={() =>
                  this.props.addOrUpdateColor({ hex: "#ff0000", id: index })
                }
              />{" "}
              {color.hex}
              <button
                onClick={() => {
                  this.props.removeColumn(color);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
