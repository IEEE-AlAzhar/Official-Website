import React from "react";

import { render, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";
import TeamServicesSection from "../components/teamServicesSection";

afterEach(() => cleanup());

describe("<TeamServicesSection /> tests", () => {
  it("should renders correctly", () => {
    let { container } = render(
      <Router>
        <TeamServicesSection />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it("should have 3 cards", () => {
    let { getByTestId } = render(
      <Router>
        <TeamServicesSection />
      </Router>
    );
    const servicesContainer = getByTestId("services-container");

    expect(servicesContainer.children.length).toEqual(3);
  });

  it("description should be 15 words only", () => {
    let { getAllByTestId } = render(
      <Router>
        <TeamServicesSection />
      </Router>
    );
    const serviceDescription = getAllByTestId("service-description")[0]
      .textContent;

    expect(serviceDescription.split(" ").length).toEqual(15);
  });

  it("'show more btn' should contains the correct link", () => {
    let { getAllByTestId } = render(
      <Router>
        <TeamServicesSection />
      </Router>
    );
    const serviceDescription = getAllByTestId("service-link")[0].href;

    expect(serviceDescription).toBe(window.location.origin + "/services/1");
  });
});
