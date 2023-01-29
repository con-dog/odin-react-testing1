import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot;
  });

  it("renders radical rhinos after button click", () => {
    render(<App />);
    const button = screen.getByRole("button", {name: "Change Heading"});

    userEvent.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });

});
