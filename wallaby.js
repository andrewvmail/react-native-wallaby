module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.js',
      'package.json',
      '!src/**/__tests__/*.js',
      '!src/**/*.test.js',
    ],

    tests: [
      // 'src/**/__tests__/*.js',
      'src/App.test.js',
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babelrc: true
        // presets: [
        //   'react-native',
        //   'react-native-stage-0/decorator-support',
        // ],
        // plugins: [
        //   'transform-flow-strip-types',
        //   'transform-object-rest-spread',
        //   'transform-async-to-generator',
        // ],
      }),
    },

    // setup: (wallaby) => {
    //   wallaby.testFramework.configure(require('./package.json').jest);
    // },
  };
};
