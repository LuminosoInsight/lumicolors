import React, { Component } from "react";
import queryString from "query-string";
import _ from "lodash";
import chroma from "chroma-js";

import generateColors from "./generateColors";

const Swatch = props => {
  const styles = {
    display: "inline-block",
    height: "36px",
    width: "200px",
    color: props.color.displayColor,
    padding: "0.5rem",
    backgroundColor: props.color.hex,
    boxSizing: "border-box"
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
    <li>
      <span style={styles}>
        {props.color.hex} |{" "}
        <span style={contrastBlackStyles}>{props.color.contrastBlack}</span> |{" "}
        <span style={contrastWhiteStyles}>{props.color.contrastWhite}</span>
        <SourceMarker />
      </span>
    </li>
  );
};

class Colors extends Component {
  render() {
    // Get query params
    let params = queryString.parse(this.props.location.search);
    let sourceColors = [];
    if (!Array.isArray(params.color)) {
      sourceColors.push(params.color);
    } else {
      sourceColors = params.color;
    }

    const getSpecs = sourceColor => {
      // Get hsl values from supplied color
      let hsv = chroma(sourceColor).hsv();
      let hue = hsv[0];
      let sat = hsv[1];
      let lum = hsv[2];

      return {
        lum_curve: "linear",
        lum_start: 90,
        lum_end: 10,
        sat_curve: "linear",
        sat_start: 10,
        sat_end: 90,
        sat_rate: 70,
        hue_curve: "linear",
        hue_start: 10,
        hue_end: 0,
        steps: 18,
        modifier: null,
        sourceColor
      };
    };

    const styles = {
      display: "flex",
      flexDirection: "row"
    };

    return (
      <div style={styles}>
        {_.map(sourceColors, (sourceColor, index) => {
          // Generate a color palette from each source color
          let colorPalette = generateColors({ specs: getSpecs(sourceColor) });
          return (
            <div key={index}>
              <ul style={{ borderRight: `10px solid ${sourceColor}` }}>
                {_.map(colorPalette, (swatchColor, index) => {
                  return (
                    <Swatch key={index} index={index} color={swatchColor} />
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Colors;
