import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "../../components";

test("Header verifications", () => {
  render(<Header />);

  const div = screen.getByTestId("div-test");
  const input = screen.getByTestId("input-test");
  const button = screen.getByTestId("button-test");

  expect(div).toContainElement(input);
  expect(div).toContainElement(button);
});
