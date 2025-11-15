import { render , screen } from "@testing-library/react";
import { expect } from "vitest";

import App from "../App.jsx";


test('renders an example component', () => {
  render (<App />);
  const mainPageContentElement = screen.getByTestId('app-main-heading');
  expect(mainPageContentElement).toBeInTheDocument();
});
