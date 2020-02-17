module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|spec.tsx)$',
  testPathIgnorePatterns: ['/node_modules/', 'style.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(svg|jpg|png|css|svg)$': '<rootDir>/spec/empty-module.js'
  },
  setupFilesAfterEnv: ['<rootDir>/spec/setup.js'],
  moduleDirectories: ['node_modules', 'src']
};
