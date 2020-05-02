import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import ThemeButton from "shared/theme-button";

afterEach(() => cleanup());

describe("<ThemeButton /> tests", () => {
  it("should toggle theme on click", () => {
    const toggle = jest.fn();
    let { getByTestId } = render(<ThemeButton toggle={toggle} />);
    let themeToggler = getByTestId("theme-toggler");

    fireEvent.click(themeToggler);

    expect(toggle).toHaveBeenCalledTimes(1);
  });
});
