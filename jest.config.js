const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load the correct configuration
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', __dirname],
  moduleNameMapper: {
    // Use the file transformer for .css files
    '^@/src/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.js']
  // Add more setup options before each test is ran
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // If you want to use Jest's built-in coverage reporting or use a library
  // like @next/bundle-analyzer, you can use the following
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   'src/**/*.{js,jsx,ts,tsx}',
  //   '!src/**/_app.{js,jsx,ts,tsx}',
  //   '!src/**/_document.{js,jsx,ts,tsx}',
  // ],
};

// createJestConfig is exported in this way to ensure that next/jest can load the config in a next.js project
module.exports = createJestConfig(customJestConfig);
