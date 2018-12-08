import React, { Component } from "react";
import queryString from "query-string";
import _ from "lodash";
import { connect } from "redux-zero/react";

import actions from "./actions";
import Palettes from "./Palettes";
import Sidebar from "./Sidebar";

class Colors extends Component {
  componentDidMount() {
    // Get query params
    let params = queryString.parse(this.props.location.search);
    let colorQueries = [];
    if (params.color) {
      if (!Array.isArray(params.color)) {
        colorQueries.push(params.color);
      } else {
        colorQueries = params.color;
      }
    }
    let queryColors = _.map(colorQueries, query => {
      let splitQuery = query.split("/");
      return {
        hex: splitQuery[0],
        id: splitQuery[1]
      };
    });

    this.props.updateColors({
      ...this.props.colors,
      ..._.keyBy(queryColors, "id")
    });
  }

  render() {
    // Get query params
    let params = queryString.parse(this.props.location.search);
    let colorQueries = [];
    if (params.color) {
      if (!Array.isArray(params.color)) {
        colorQueries.push(params.color);
      } else {
        colorQueries = params.color;
      }
    }
    let sourceColors = _.map(colorQueries, query => {
      let splitQuery = query.split("/");
      return {
        color: splitQuery[0],
        id: splitQuery[1]
      };
    });

    // Adding, removing and updating colors
    let addColor = e => {
      e.preventDefault();
      params.color = _.concat(
        e.target.newColor.value,
        _.cloneDeep(params.color)
      );
      let newQueryString = queryString.stringify(params);
      e.target.value = null;
      this.props.history.push(`/?${newQueryString}`);
    };

    return (
      <div className="lumicolors-tool">
        <Sidebar />
        <Palettes />
      </div>
    );
  }
}

const mapToProps = ({ colors }) => ({ colors });

export default connect(
  mapToProps,
  actions
)(Colors);
