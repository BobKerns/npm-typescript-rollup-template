/*
 * Copyright 2021 by Bob Kerns. Licensed under MIT license.
 *
 * Github: https://github.com/BobKerns/npm-rollup-typescript-template
 */

// Test of whether source maps make it through to jest.

describe("Verify handling stack traces correctly.", () => {
   test("Test stack mapping", () => {
       try {
           // The following throw must be on line 17.
           //
           //
           //
           // noinspection ExceptionCaughtLocallyJS
           throw new Error("E"); // This must be line 17.
       } catch (e: any) {
           expect(e.message).toBe("E");
           expect(e.stack).toMatch(/[/\\]error-handling.ts[^a-zA-Z0-9]+17/m);
       }
   })
});
