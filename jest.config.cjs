const nextJest = require("next/jest.js");

const createJestConfig = nextJest({ dir: "./" });

const config = {
  clearMocks: true,
  coverageProvider: "v8",
  setupFiles: ["./jest.polyfills.js"],
  setupFilesAfterEnv: ["<rootDir>/src/config/tests/jest.setup.ts"],
  testTimeout: 20000,
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(css|less|scss|sass|ttf)$": "ts-jest",
  },
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
};

module.exports = createJestConfig(config);
