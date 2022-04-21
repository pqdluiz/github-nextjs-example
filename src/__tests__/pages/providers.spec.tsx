import { render, screen } from "@testing-library/react";
import Providers from "../../pages/providers";

test("Providers verifications", () => {
  render(<Providers />);

  const div = screen.getByTestId("");
});
