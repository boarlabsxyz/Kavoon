const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',

  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/*.{js,jsx,tsx}',
    'src/components/**/*.{tsx,jsx}',
    'data/**/*.{js,ts}',
    'helpers/**/*.{js,ts}',
    '!**/node_modules/**',
    '!**/*.d.ts',
  ],

  coverageThreshold: {
    global: {
      statements: 10,
      branches: 7,
      functions: 6,
      lines: 10,
    },
  },

  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  testMatch: ['**/*.test.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};

module.exports = createJestConfig(customJestConfig);
