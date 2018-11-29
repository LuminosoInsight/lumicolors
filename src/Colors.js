import React, { Component } from "react";
import queryString from "query-string";

class Colors extends Component {
  render() {
    let params = queryString.parse(this.props.location.search);
    const styles = {
      display: "inline-block",
      height: "20px",
      color: "white",
      padding: "0.5rem",
      backgroundColor: params.color
    };
    return (
      <div>
        <p>
          <span style={styles}>{params.color}</span>
        </p>
      </div>
    );
  }
}

export default Colors;
