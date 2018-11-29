import React, { Component } from "react";
// import queryString from "query-string";
import _ from "lodash";

import generateColors from "./generateColors";

const Swatch = props => {
  const styles = {
    display: "inline-block",
    height: "20px",
    color: "white",
    padding: "0.5rem",
    backgroundColor: props.color
  };
  return (
    <li>
      <p>
        <span style={styles}>{props.color}</span>
      </p>
    </li>
  );
};

class Colors extends Component {
  render() {
    const specs = {
      lum_curve: "linear",
      lum_start: 1,
      lum_end: 100,
      sat_curve: "linear",
      sat_start: 1,
      sat_end: 100,
      sat_rate: 20,
      hue_curve: "linear",
      hue_start: 200,
      hue_end: 220,
      steps: 8,
      modifier: null
    };
    const colors = generateColors({ specs });
    console.log(colors);

    // let params = queryString.parse(this.props.location.search);
    return (
      <div>
        <ul>
          {_.map(colors, color => {
            return <Swatch key={color.hex} color={color.hex} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Colors;
