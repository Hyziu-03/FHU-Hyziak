// jest.config.cjs
module.exports = {
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(your-esm-dependency)/)", // Ignore node_modules except specific ESM deps
  ],
  moduleFileExtensions: ["js", "mjs", "json", "node"],
  testEnvironment: "jsdom",
};
