import { expect, test } from "bun:test";
import init from "../.build";

init({ ignore: [] });

test("capitalize", () => {
  expect("test".CAPITALIZE()).toBe("Test");
});

test("flip", () => {
  expect("test".FLIP()).toBe("tset");
});
