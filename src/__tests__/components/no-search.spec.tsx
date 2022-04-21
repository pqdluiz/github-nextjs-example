import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NoSearch } from "../../components";

test("NoSearch verifications", () => {
  render(<NoSearch />);

  const div = screen.getByTestId("");
});
