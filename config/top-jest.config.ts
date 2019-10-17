/*
 * Copyright © 2019. Licensed under MIT license.
 */

export default {
  preset: 'ts-jest',
    "modulePaths": [
        "<rootDir>/lib",
        "<rootDir>/build/src"
    ],
  testMatch: [
    "**/__tests__/*.{ts,tsx,js,jsx,mjs}",
      "!**/lib/**",
      "!**/build/**",
      "!**/*.d.ts?(x)",
      "!**/suite-*.*"
  ]
};
