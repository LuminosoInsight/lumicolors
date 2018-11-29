import React, { Component } from "react";
import queryString from "query-string";
import _ from "lodash";
import chroma from "chroma-js";

import generateColors from "./generateColors";

const Swatch = props => {
  const styles = {
    display: "inline-block",
    height: "20px",
    width: "200px",
    color: props.color.displayColor,
    padding: "0.5rem",
    backgroundColor: props.color.hex
  };
  const contrastBlackStyles = {
    color: "black"
  };
  const contrastWhiteStyles = {
    color: "white"
  };
  return (
    <li>
      <span style={styles}>
        {props.color.hex} |{" "}
        <span style={contrastBlackStyles}>{props.color.contrastBlack}</span> |{" "}
        <span style={contrastWhiteStyles}>{props.color.contrastWhite}</span>
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
      console.log(hue);
      console.log(sat);
      console.log(lum);

      // console.log(sourceColor);
      // console.log(hue);
      return {
        lum_curve: "easeInOutQuad",
        lum_start: 98,
        lum_end: 30,
        sat_curve: "easeInOutQuad",
        sat_start: 20,
        sat_end: 200,
        sat_rate: 70,
        hue_curve: "linear",
        hue_start: hue,
        hue_end: hue,
        steps: 18,
        modifier: null
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
          console.log(colorPalette);
          return (
            <div key={index}>
              <ul>
                {_.map(colorPalette, (swatchColor, index) => {
                  return <Swatch key={index} color={swatchColor} />;
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
