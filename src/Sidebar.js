import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import ColorPicker from "./ColorPicker";
import ColorFinder from "./ColorFinder";
import CodeOutput from "./CodeOutput";

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
        <hr />
        <div>
          <p>
            Supply a color code (Valid CSS value)and get in return the name and
            hex of a valid color from this palette
          </p>
          <ColorFinder colors={this.props.colors} />
        </div>
        <hr />
        <div>
          <p>Get example color variables for styles and Javascript</p>
          <CodeOutput colors={this.props.colors} />
        </div>
        <hr />
        <div>
          <p>
            <a href="/?color=%23ffffff&color=%237d27bc&color=%23F03B97&color=%23EA3A3A&color=%23ffa934&color=%2395ca4e&color=%2304aade">
              Luminoso Color Palette
            </a>
          </p>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  addOrUpdateColor: PropTypes.func.isRequired,
  colors: PropTypes.object.isRequired,
  removeColumn: PropTypes.func.isRequired
};

export default Sidebar;
