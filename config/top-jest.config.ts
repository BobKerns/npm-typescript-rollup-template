/*
 * Copyright © 2019. Licensed under MIT license.
 */

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
    "modulePaths": [
        "<rootDir>/lib"
    ],
  testMatch: [
    "**/__tests__/*.{ts,tsx,js,jsx,mjs}",
      "!**/lib/**",
      "!**/build/**",
      "!**/*.d.ts?(x)",
      "!**/suite-*.*"
  ]
};
