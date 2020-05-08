import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import ThemeContext from "globals/contexts/theme.context";
import routes from "globals/routes";

import { BrowserRouter as Router } from "react-router-dom";
import SideDrawer from "shared/sideDrawer";

afterEach(() => cleanup());

// To mock window.matchMedia fn
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("<SideDrawer /> tests", () => {
  it("should close side drawer on click", () => {
    let { getByTestId } = render(
      <ThemeContext>
        <Router>
          <SideDrawer />
        </Router>
      </ThemeContext>
    );

    const closerBtn = getByTestId("drawer-closer");
    const sideDrawer = getByTestId("side-drawer-menu");

    fireEvent.click(closerBtn);

    expect(sideDrawer).not.toHaveClass("side-drawer--opened");
  });

  it("should have the correct number of links", () => {
    let { getByTestId } = render(
      <ThemeContext>
        <Router>
          <SideDrawer />
        </Router>
      </ThemeContext>
    );
    const navbarList = getByTestId("side-drawer-list");
    let routesWithLabel = routes.filter((route) => !!route.label);

    expect(navbarList.children.length).toEqual(routesWithLabel.length);
  });

  it("should be active on click", () => {
    let { getAllByTestId } = render(
      <ThemeContext>
        <Router>
          <SideDrawer />
        </Router>
      </ThemeContext>
    );
    const sideDrawerLinks = getAllByTestId("side-drawer-link");

    fireEvent.click(sideDrawerLinks[0]);

    expect(sideDrawerLinks[0]).toHaveClass("side-drawer__link--active");

    fireEvent.click(sideDrawerLinks[1]);

    expect(sideDrawerLinks[1]).toHaveClass("side-drawer__link--active");
  });
});
