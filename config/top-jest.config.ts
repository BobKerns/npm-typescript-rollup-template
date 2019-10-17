/*
 * Copyright © 2019. Licensed under MIT license.
 */

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
      testMatch: [
          "src/__tests__/hello-world.ts",
    "**/__tests__/*.{ts,tsx,js,jsx,mjs}",
      "!**/*.d.ts?(x)",
      "!**/suite-*.*",
      "!**/build/**"
  ]
};
