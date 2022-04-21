import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Layout } from "../../components";

test("Layout verifications", () => {
  render(<Layout />);

  const div = screen.getByTestId("");
});
