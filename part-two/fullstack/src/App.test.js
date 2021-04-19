import { render, screen } from "@testing-library/react";
import App from "./App";

test("works", () => {
  render(<App />);
  const linkElement = screen.getByText(/Select an item to view its details/i);
  expect(linkElement).toBeInTheDocument();
});
