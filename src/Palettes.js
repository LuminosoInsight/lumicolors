import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

class Palettes extends Component {
  render() {
    return (
      <div
        className="swatch-area"
        style={{ display: "flex", flexDirection: "row" }}
      >
        {_.map(_.orderBy(this.props.colors, "id", "desc"), (color, index) => {
          // Generate a color palette from each source color
          return (
            <div key={index} className="swatch-list">
              {_.map(color.swatches, (swatchColor, index) => {
                return <Swatch key={index} index={index} color={swatchColor} />;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

Palettes.propTypes = {
  colors: PropTypes.object.isRequired
};

export default Palettes;

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
