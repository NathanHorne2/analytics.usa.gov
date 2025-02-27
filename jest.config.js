/**
 * @type {import('jest').Config}
 */
const config = {
  collectCoverage: true,
  collectCoverageFrom: [
    "js/**/*.js",
    "!js/lib/eventhandler.js",
    "!js/lib/react_setup.js",
    "!js/lib/touchpoints.js",
  ],
  coverageDirectory: "./coverage",
  setupFiles: ["./jest_setup.js"],
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns: [],
};

module.exports = config;
