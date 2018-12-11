import React, { Component } from "react";
import queryString from "query-string";
import _ from "lodash";
import { connect } from "redux-zero/react";

import generateColors from "./generateColors";
import actions from "./actions";
import Palettes from "./Palettes";
import Sidebar from "./Sidebar";

// Get colors from query params when this component mounts
const getColorParams = props => {
  // Get query params
  let params = queryString.parse(props.location.search);
  let colorQueries = [];
  if (params.color) {
    if (!Array.isArray(params.color)) {
      colorQueries.push(params.color);
    } else {
      colorQueries = params.color;
    }
  }
  // Return an array of color objects
  return _.map(colorQueries, (color, index) => {
    return {
      hex: color,
      id: index
    };
  });
};

// Merge any supplied color object {hex, id}, return a list set ordered by 'id'
const getMergedColors = (colorObj, colors) => {
  let mergedColors = {
    ...colors,
    ..._.keyBy([colorObj], "id")
  };
  let colorsArray = _.map(_.orderBy(mergedColors, "id"), color => {
    return color.hex;
  });
  return colorsArray;
};

// Build a new query string
const getQueryString = colors => {
  return queryString.stringify({
    color: _.map(_.orderBy(colors, "id"), color => {
      return color;
    })
  });
};

class Colors extends Component {
  constructor(props) {
    super(props);
    this.addOrUpdateColor = this.addOrUpdateColor.bind(this);
    this.removeColumn = this.removeColumn.bind(this);
  }

  componentDidMount() {
    // When this component mounts, get colors from the query params
    let queryColors = getColorParams(this.props);
    let colorPalettes = _.keyBy(
      _.map(queryColors, color => {
        let swatches = generateColors(color.hex);
        return {
          ...color,
          sourceColorIndex: swatches[0].sourceColorIndex,
          swatches
        };
      }),
      "id"
    );
    this.props.replaceColors(colorPalettes);
  }

  addOrUpdateColor(colorObj) {
    // If a color was supplied, use it. Otherwise fall back to new color
    console.log(this.props.colors);
    let newColorId = this.props.colors.length;
    console.log(newColorId);
    let newColorObj = colorObj.hex
      ? {
          ...colorObj,
          swatches: generateColors(colorObj.hex)
        }
      : {
          hex: "#666666",
          id: Object.keys(this.props.colors).length,
          swatches: generateColors("#666666")
        };

    // Merge the new color and add it to the store and the query params
    let mergedColors = getMergedColors(newColorObj, this.props.colors);
    this.props.updateColor(newColorObj);
    this.props.history.push(`?${getQueryString(mergedColors)}`);
  }

  removeColumn(color) {
    let culledColors = _.map(
      _.filter(this.props.colors, existingColor => {
        return existingColor.id !== color.id;
      }),
      color => {
        return color.hex;
      }
    );
    this.props.removeColor(color);
    this.props.history.push(`?${getQueryString(culledColors)}`);
  }

  render() {
    return (
      <div className="lumicolors-tool">
        <Sidebar
          addOrUpdateColor={this.addOrUpdateColor}
          colors={this.props.colors}
          removeColumn={this.removeColumn}
        />
        <Palettes colors={this.props.colors} />
      </div>
    );
  }
}

const mapToProps = ({ colors }) => ({ colors });

export default connect(
  mapToProps,
  actions
)(Colors);
