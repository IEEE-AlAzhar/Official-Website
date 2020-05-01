import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import ThemeContext from "globals/contexts/theme.context";
import routes from "globals/routes";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "shared/header";

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

afterEach(() => cleanup());

describe("<Header /> tests", () => {
  it("toggler button should open side drawer on click", () => {
    let { getByTestId } = render(
      <ThemeContext>
        <Router>
          <Header />
        </Router>
      </ThemeContext>
    );

    const openerBtn = getByTestId("side-drawer-toggler");
    const sideDrawer = getByTestId("side-drawer-menu");

    fireEvent.click(openerBtn);

    expect(sideDrawer).toHaveClass("side-drawer--opened");
  });

  it("should have the correct number of links", () => {
    let { getByTestId } = render(
      <ThemeContext>
        <Router>
          <Header />
        </Router>
      </ThemeContext>
    );
    const navbarList = getByTestId("navbar-list");
    let routesWithLabel = routes.filter((route) => !!route.label);

    expect(navbarList.children.length).toEqual(routesWithLabel.length);
  });

  it("should get the 'active' class on click", () => {
    let { getAllByTestId } = render(
      <ThemeContext>
        <Router>
          <Header />
        </Router>
      </ThemeContext>
    );
    const navbarLinks = getAllByTestId("navbar-link");

    fireEvent.click(navbarLinks[0]);

    expect(navbarLinks[0]).toHaveClass("active");

    fireEvent.click(navbarLinks[1]);

    expect(navbarLinks[1]).toHaveClass("active");
  });
});
