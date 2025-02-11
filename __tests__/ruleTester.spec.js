import { ESLint } from "eslint";
import { afterAll } from "vitest";
import { beforeAll } from "vitest";
import { test } from "vitest";
import { describe, expect } from "vitest";

describe("Rule set test case", () => {
  /**
   * @type {import("eslint").ESLint}
   */
  let lint;

  beforeAll(() => {
    process.chdir("__tests__");
    lint = new ESLint({
      cwd: process.cwd(),
    });
  });

  afterAll(() => {
    lint = undefined;
    process.chdir("..");
  });

  test(`Load and lint tsx`, async () => {
    const lintResults = await lint?.lintFiles("./files/typescript.react.tsx");
    expect(lintResults).not.toBeNull();
  });

  // test(`Load and lint jsx`, async () => {
  //   const lintResults = await lint?.lintFiles("./files/javascript.react.jsx");
  //   expect(lintResults).not.toBeNull();
  // });

  // test(`Load and lint js`, async () => {
  //   const lintResults = await lint?.lintFiles("./files/javascript.js");
  //   expect(lintResults).not.toBeNull();
  // });

  test(`Load and lint ts`, async () => {
    const lintResults = await lint?.lintFiles("./files/typescript.ts");
    expect(lintResults).not.toBeNull();
  });

  test(`Load and lint json`, async () => {
    const lintResults = await lint?.lintFiles("./files/names.json");
    expect(lintResults).not.toBeNull();
  });

  test(`Load and lint css`, async () => {
    const lintResults = await lint?.lintFiles("./files/styles.css");
    expect(lintResults).not.toBeNull();
  });
});
