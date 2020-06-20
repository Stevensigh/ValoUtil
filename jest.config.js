module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  setupFiles: ['./test/setup.js'],
  testURL: 'http://localhost',
  verbose: true,
  moduleNameMapper: {
    '\\.(svg|png)': 'identity-obj-proxy',
  },
};
