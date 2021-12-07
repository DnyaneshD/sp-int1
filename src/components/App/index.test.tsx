import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

test("renders Please fill link", () => {
  render(<App />);
  const text = screen.getByText(/Hello/i);
  expect(text).toBeInTheDocument();
});
