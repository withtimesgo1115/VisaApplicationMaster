/** @type {import('jest').Config} */
module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': [
      '<rootDir>/../../apps/api/node_modules/ts-jest/dist/index.js',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        diagnostics: false
      }
    ]
  }
};
