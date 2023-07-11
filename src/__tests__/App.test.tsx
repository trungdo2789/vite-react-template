import { render, screen } from "@testing-library/react";
import App from "../App";

it("<App /> should return correctly user interface", () => {
  render(<App />);
  const doc = screen.queryByRole("document");
  expect(doc).toBeDefined();
});
