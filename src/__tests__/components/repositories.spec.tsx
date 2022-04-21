import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Repositories } from "../../components";

test("Repositories verifications", () => {
  render(<Repositories />);

  const div = screen.getByTestId("");
});
