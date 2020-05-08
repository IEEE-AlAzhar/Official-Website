import React from "react";

import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Footer from "shared/footer";

afterEach(() => cleanup());

describe("<Footer /> tests", () => {
  it("should have 3 items of social links", () => {
    let { getByTestId } = render(<Footer />);
    let socialList = getByTestId("social-list");

    expect(socialList.children.length).toEqual(3);
  });
});
