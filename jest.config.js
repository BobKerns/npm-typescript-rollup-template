// Allows using typescript for configuration.
// Edit devtools/top-jest.config.js

const config = {
    preset: 'ts-jest',
        testEnvironment: 'node',
        testMatch: [
        "**/__tests__/*.{ts,tsx,js,jsx,mjs}",
        "!**/*.d.ts?(x)",
        "!**/suite-*.*"
    ]
};

module.exports = config;
