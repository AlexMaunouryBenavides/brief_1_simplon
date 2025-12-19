import { redirectIfNoCurrentUser } from "../profile.js";
import { jest, test, expect, beforeEach } from "@jest/globals";

test("redirige si user null", () => {
  const fakeLocation = { href: "index.html" };

  redirectIfNoCurrentUser(null, fakeLocation);

  expect(fakeLocation.href).toBe("login.html");
});
