import { test } from "node:test";
import assert from "node:assert/strict";
import { validateProfile, emptyProfile } from "./profile.ts";

const today = new Date(2026, 9, 30);
const good = {
  ...emptyProfile,
  firstName: "Test",
  lastName: "User",
  password: "12345678",
  dob: new Date(2000, 0, 1),
  role: "STUDENT",
  topics: ["React"],
};

test("all fields valid -> no errors", () => {
  assert.deepEqual(validateProfile(good, today), {});
});

test("whitespace-only first name -> error", () => {
  assert.ok(validateProfile({ ...good, firstName: "   " }, today).firstName);
});

test("password: 7 chars fails, 8 chars passes (boundary)", () => {
  assert.ok(validateProfile({ ...good, password: "1234567" }, today).password);
  assert.equal(validateProfile({ ...good, password: "12345678" }, today).password, undefined);
});

test("invalid date -> error", () => {
  assert.ok(validateProfile({ ...good, dob: new Date("abc") }, today).dob);
});

test("born tomorrow -> error", () => {
  assert.ok(validateProfile({ ...good, dob: new Date(2026, 9, 31) }, today).dob);
});

test("unknown role -> error", () => {
  assert.ok(validateProfile({ ...good, role: "teacher" }, today).role);
});

test("unknown topic -> error", () => {
  assert.ok(validateProfile({ ...good, topics: ["Python"] }, today).topics);
});
