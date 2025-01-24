/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @type {import("eslint").Linter.Config[]}
 */
const config = {
  overrides: [
    {
      files: ["*.tsx", "*.ts"],
    },
  ],
};

throw Error(
  `Since the legacy configuration already marked as depracated, please use the flat config instead.\nUsage:\n import { config } from "@moccona/eslint-config/flat"`
);
