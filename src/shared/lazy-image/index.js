import React, { Component } from "react";
import LazyLoad from "react-lazy-load";

import ImageLoader from "../Image-loader";

export default class LazyImage extends Component {
  render() {
    return (
      <LazyLoad debounce={false} offsetVertical={200} offsetHorizontal={100}>
        <ImageLoader {...this.props} />
      </LazyLoad>
    );
  }
}
