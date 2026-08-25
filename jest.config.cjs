// jest.config.cjs
module.exports = {
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "mjs", "json", "node"],
  testEnvironment: "jsdom",
};
