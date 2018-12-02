import React, { Component } from "react";
import queryString from "query-string";
import _ from "lodash";

import generateColors from "./generateColors";

const Swatch = props => {
  const styles = {
    color: props.color.displayColor,
    backgroundColor: props.color.hex
  };
  const contrastBlackStyles = {
    color: "black"
  };
  const contrastWhiteStyles = {
    color: "white"
  };

  const SourceMarker = () => {
    if (props.color.sourceColorIndex === props.index) {
      return <span>*</span>;
    } else {
      return null;
    }
  };
  return (
    <div className="swatch" style={styles}>
      <div className="swatch__info">
        <span className="swatch__info-segment">{props.color.hex}</span>
        <span className="swatch__info-segment" style={contrastBlackStyles}>
          {props.color.contrastBlack}b
        </span>
        <span className="swatch__info-segment" style={contrastWhiteStyles}>
          {props.color.contrastWhite}w
        </span>
        <SourceMarker />
      </div>
    </div>
  );
};

class Colors extends Component {
  render() {
    // Get query params
    let params = queryString.parse(this.props.location.search);
    let sourceColors = [];
    if (params.color) {
      if (!Array.isArray(params.color)) {
        sourceColors.push(params.color);
      } else {
        sourceColors = params.color;
      }
    }
    console.log(sourceColors);

    const styles = {
      display: "flex",
      flexDirection: "row"
    };

    return (
      <div className="lumicolors-tool">
        <div className="sidebar">
          {_.map(sourceColors, (sourceColor, index) => {
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
        <div className="swatch-area" style={styles}>
          {_.map(sourceColors, (sourceColor, index) => {
            console.log(sourceColor, index);
            // Generate a color palette from each source color
            let colorPalette = generateColors(sourceColor);
            return (
              <div key={index} className="swatch-list">
                {_.map(colorPalette, (swatchColor, index) => {
                  return (
                    <Swatch key={index} index={index} color={swatchColor} />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Colors;
