import { render, screen, cleanup } from "@testing-library/react";

import Topbar from "../Topbar";
afterEach(() => {
  cleanup();
});

test("should test have static content first line  ", () => {
  const static_text1 = "Guess the sentence ! Starting typing";
  render(<Topbar />);
  const userElement = screen.getByTestId("static_text1_id");
  expect(userElement).toBeInTheDocument();
  expect(userElement).toHaveTextContent(static_text1);
});

test("should test have static content second line  ", () => {
  const static_text2 = "the yellow blocks are meant by spaces";
  render(<Topbar />);
  const userElement = screen.getByTestId("static_text2_id");
  expect(userElement).toBeInTheDocument();
  expect(userElement).toHaveTextContent(static_text2);
});
