/*
 * Copyright © 2019. Licensed under MIT license.
 */

export default {
    preset: 'ts-jest',
    globals: {
      "ts-jest": {
          "tsConfig": "src/__tests__/tsconfig.json",
      }
    },
    "modulePaths": [
        "<rootDir>/lib",
        "<rootDir>/build/src"
    ],
  testMatch: [
    "**/__tests__/*.{ts,tsx,js,jsx,mjs}",
      "!**/src/*.{ts,tsx,js,jsx,mjs}",
      "!**/node_modules/**",
      "!**/lib/**",
      "!**/build/**",
      "!**/*.d.ts?(x)",
      "!**/suite-*.*"
  ]
};
