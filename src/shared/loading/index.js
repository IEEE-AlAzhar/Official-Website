import React, { Component } from "react";
import { Facebook } from "react-content-loader";

export default class Loading extends Component {
  render() {
    return (
      <div style={{ margin: "10rem 0" }}>
        <Facebook
          title={this.props.title}
          backgroundColor="var(--text-primary)"
          foregroundColor="var(--layout-primary)"
        />
      </div>
    );
  }
}
