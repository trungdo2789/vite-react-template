/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  moduleDirectories: ["node_modules", "<rootDir>/src/"],
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  modulePaths: ["<rootDir>/src/"],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|style|less|sass|scss)$": "jest-css-modules-transform",
  },
};
