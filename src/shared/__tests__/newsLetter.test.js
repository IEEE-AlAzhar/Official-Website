import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import NewsLetterForm from "shared/newsletterForm";

afterEach(() => cleanup());

describe("<NewsLetterForm /> tests", () => {
  it("should show error message if field is empty", () => {
    let { getByText } = render(<NewsLetterForm />);
    const subscribeBtn = getByText("Subscribe");

    fireEvent.click(subscribeBtn);

    expect(getByText("Please type your email")).toBeInTheDocument();
  });

  it("should show error message if email is not valid", () => {
    let { getByText, getByPlaceholderText } = render(<NewsLetterForm />);
    const subscribeBtn = getByText("Subscribe");
    const emailInput = getByPlaceholderText("Type your email here");

    fireEvent.change(emailInput, { target: { value: "fake email" } });
    fireEvent.click(subscribeBtn);

    expect(getByText("Please enter a valid email")).toBeInTheDocument();
  });
});
