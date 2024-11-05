// eslint-disable-next-line @typescript-eslint/no-require-imports
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
