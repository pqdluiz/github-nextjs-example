import { render, screen } from "@testing-library/react";
import Home from "../../pages";

test("Home verifications", () => {
  render(<Home />);

  const div = screen.getByTestId("");
});
