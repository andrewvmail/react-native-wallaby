module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.js',
      'package.json',
      '!src/**/__tests__/*.js',
      '!src/**/*.test.js',
    ],

    tests: [
      'src/App.test.js',
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: [
          'react-native',
        ],
      }),
    },
  };
};
