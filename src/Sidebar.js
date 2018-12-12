import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import ColorPicker from "./ColorPicker";
import ColorFinder from "./ColorFinder";

class Sidebar extends Component {
  render() {
    const rowStyles = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: ".25rem 0"
    };

    let getSass = () => {
      let sassCode = "";
      _.each(this.props.colors, color => {
        sassCode += `// Shades of ${color.name}\n`;
        _.each(color.swatches, swatch => {
          sassCode += `$${swatch.name}: ${swatch.hex};\n`;
        });
      });
      return sassCode;
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
        <div>
          <ColorFinder colors={this.props.colors} />
        </div>
        <div>
          <p>Sass variables</p>
          <textarea
            style={{ width: "100%", height: "200px" }}
            disabled
            value={getSass()}
          />
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
