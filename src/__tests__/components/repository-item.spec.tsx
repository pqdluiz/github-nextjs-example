import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";

import { RepositoryItem } from "../../components";

const user = {
  fullName: faker.name.findName(),
  linkRepo: faker.internet.url(),
  name: faker.name.firstName(),
};

test("RepositoryItem verifications", () => {
  render(
    <RepositoryItem
      fullName={user.fullName}
      linkToRepo={user.linkRepo}
      name={user.name}
    />
  );

  const div = screen.getByTestId("div-test");
  const h2 = screen.getByTestId("h2-test");
  const a = screen.getByTestId("a-test");

  expect(div).toContainElement(h2);
  expect(div).toContainElement(a);
});
