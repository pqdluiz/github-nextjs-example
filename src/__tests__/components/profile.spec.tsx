import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Profile } from "../../components";

test("Profile verifications", () => {
  render(<Profile />);

  const div = screen.getByTestId("");
});
