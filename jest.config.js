module.exports = {
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx', 'node'],
    moduleNameMapper: {
        '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^utils/(.*)$': '<rootDir>/src/utils/$1',
        '^api(.*)$': '<rootDir>/src/utils/api',
        '^tools(.*)$': '<rootDir>/src/utils/toolLib',
        '^servers(.*)$': '<rootDir>/src/servers/index',
        '^logicComponents/(.*)$': '<rootDir>/src/logicComponents/$1',
        '^commonComponents/(.*)$': '<rootDir>/src/commonComponents/$1',
    },
    setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js', '<rootDir>/tests/setup'],
    testEnvironment: 'jest-environment-jsdom-fourteen',
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
    transform: {
        // 对我们的jest文件使用babel-jest进行转义 这样就支持新的语法了
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        // 如果我们的文件引入的css这样的文件 就使用cssTransform进行处理 也就是返回空对象,因为我们不会对对象测试
        '^.+\\.(css|less)$': '<rootDir>/tests/utils/cssTransform.js',
        // 如果引入的不是这些文件,那么除了svg返回一个react的组件,其他的只返回文件名
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/tests/utils/fileTransform.js',
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
        // '^.+\\.(css|less|sass|scss)$',
        '^.+\\.module\\.(css|less|sass|scss)$',
        '<rootDir>/node_modules/',
    ],
    roots: ['<rootDir>/src'],
    modulePaths: ['<rootDir>/src'],
    testURL: 'http://localhost:7001',
};
