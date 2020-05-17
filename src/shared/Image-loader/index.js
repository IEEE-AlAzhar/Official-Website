import React, { Component } from "react";
import "./style.css";

const _loaded = {};

class ImageLoader extends Component {
  state = {
    loaded: _loaded[this.props.src],
  };

  static defaultProps = {
    className: "",
    loadingClassName: "img-loading",
    loadedClassName: "img-loaded",
  };

  onLoad = () => {
    _loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };

  render() {
    let {
      className,
      loadedClassName,
      loadingClassName,
      src,
      alt,
      width,
      height,
    } = this.props;

    className = `${className} ${
      this.state.loaded ? loadedClassName : loadingClassName
    }`;

    return (
      <img
        width={width}
        height={height}
        src={src}
        alt={alt}
        className={className}
        onLoad={this.onLoad}
      />
    );
  }
}

export default ImageLoader;
