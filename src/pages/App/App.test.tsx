import React from "react";

import { AppPage } from "@/pages";
import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(<AppPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
