import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "globals/routes";

export default class App extends Component {
  componentDidMount() {
    document.body.classList.add("light_theme");
  }

  renderSingleRoute = (key, path, component) => (
    <Route key={`route${key}`} exact path={path} component={component} />
  );
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, index) =>
            this.renderSingleRoute(index, route.path, route.component)
          )}
        </Switch>
      </Router>
    );
  }
}
