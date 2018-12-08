import React, { Component } from "react";
import _ from "lodash";
import { connect } from "redux-zero/react";
import queryString from "query-string";

import actions from "./actions";
import ColorPicker from "./ColorPicker";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.updateColor = this.updateColor.bind(this);
  }

  updateColor(color) {
    let mergedColors = {
      ..._.keyBy([color], "id"),
      ...this.props.colors
    };
    let newQueryColors = _.map(mergedColors, color => {
      return `${color.hex}/${color.id}`;
    });
    this.props.history.push(queryString.stringify({ colors: newQueryColors }));
  }

  render() {
    return (
      <div className="sidebar">
        {_.map(this.props.colors, (color, index) => {
          return (
            <div key={index}>
              <ColorPicker color={color} updateColor={this.updateColor} />
              <span
                className="color-dot"
                style={{
                  background: color.hex
                }}
                onClick={() => this.updateColor({ hex: "#ff0000", id: index })}
              />{" "}
              {color.hex}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapToProps = ({ colors }) => ({ colors });

export default connect(
  mapToProps,
  actions
)(Sidebar);
