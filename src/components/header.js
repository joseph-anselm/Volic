import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const path = this.props.location.pathname.slice(1);

    return (
      <div
        className="pages-hero"
        style={{ backgroundImage: `url(${this.props.imgsrc})` }}
      >
        <div className="hero-title">
          <h1>{path}</h1>
          <h5>{this.props.subtitle}</h5>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
