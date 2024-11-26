import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
  type: 'module',
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

  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

export default createJestConfig(customJestConfig);
