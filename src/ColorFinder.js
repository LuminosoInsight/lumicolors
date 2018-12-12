import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import chroma from "chroma-js";

class ColorFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comparison: null,
      search: "",
      result: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // get some info about the color that was submitted
    let submittedColor = chroma(this.state.search);
    let submittedContrastWhite = chroma
      .contrast(submittedColor.hex(), "white")
      .toFixed(2);
    let submittedContrastBlack = chroma
      .contrast(submittedColor.hex(), "black")
      .toFixed(2);
    let submittedDisplayColor = "";
    if (submittedContrastWhite >= 4.5) {
      submittedDisplayColor = "white";
    } else {
      submittedDisplayColor = "black";
    }
    let comparison = {
      hex: submittedColor.hex(),
      contrastWhite: submittedContrastWhite,
      contrastBlack: submittedContrastBlack,
      displayColor: submittedDisplayColor
    };
    // Get all swatches from all palettes
    let allSwatches = [];
    _.each(this.props.colors, color => {
      allSwatches.push(...color.swatches);
    });
    console.log(allSwatches);
    // get the swatch with the color closest to what was submitted
    let colorsWithDistance = _.map(allSwatches, color => {
      return {
        ...color,
        colorDistance: chroma.distance(color.hex, comparison.hex)
      };
    });
    let closestColor = _.first(
      _.orderBy(colorsWithDistance, "colorDistance", "asc")
    );
    console.log(colorsWithDistance);
    console.log(closestColor);
    this.setState({ comparison, result: closestColor, search: comparison.hex });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type="submit">Find a color</button>
        </form>
        {this.state.result && (
          <div>
            <p style={{ lineHeight: 1.5 }}>You searched for: </p>
            <p>
              <span
                style={{
                  background: this.state.comparison.hex,
                  color: this.state.comparison.displayColor,
                  padding: "0 .5rem",
                  borderRadius: ".5rem"
                }}
              >
                {this.state.comparison.hex}
              </span>
            </p>
            <p>The closest color is:</p>
            <p>
              <span
                style={{
                  background: this.state.result.hex,
                  color: this.state.result.displayColor,
                  padding: "0 .5rem",
                  borderRadius: ".5rem"
                }}
              >
                {`${this.state.result.hex} - ${this.state.result.name}`}
              </span>{" "}
            </p>
          </div>
        )}
      </div>
    );
  }
}

ColorFinder.propTypes = {
  colors: PropTypes.object.isRequired
};

export default ColorFinder;
