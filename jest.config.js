module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    // testMatch: ['<rootDir>/test/**/*.[jt]s?(x)', '<rootDir>/src/components/**/*.[jt]s?(x)'],
    setupFiles: ['<rootDir>/setupTests.js']
};