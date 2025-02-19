const { set } = require("express/lib/application");
const { transform } = require("typescript");

module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {presets : ['next/babel'] }]
    },
}