const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',

  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx,js,jsx}',
    '!**/layout.tsx',
    '!node_modules/**',
    '!.next/**',
    '!.vercel/**',
    '!coverage/**',
    '!cypress/**',
    '!**/helpers/shimmerUrl.js',
    '!**/*.d.ts',
    '!**/index.{ts,tsx,js,jsx}',
    '!**/*.config.ts',
  ],

  coverageThreshold: {
    global: {
      statements: 10,
      branches: 7,
      functions: 6,
      lines: 10,
    },
  },

  coverageReporters: ['text', 'lcov'],
  testMatch: ['**/*.test.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],

  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

module.exports = createJestConfig(customJestConfig);
