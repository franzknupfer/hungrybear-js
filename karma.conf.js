// Karma configuration
// Generated on Wed Jul 26 2017 15:30:02 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jquery-3.2.1', 'jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'js/*.js',
      'spec/*-spec.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'js/*.js': [ 'browserify'],
      'spec/*.js': ['browserify'],
    },
    plugins: [
      'karma-jquery',
      'karma-browserify',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jasmine-html-reporter',
      'karma-coverage'
    ],
    browserify: {
      debug: true,
      transform: [ [ 'babelify', {presets: ["es2015"]} ] ]
    },

    // This is for Istanbul.js.
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },


    // Note: 'coverage' is for Istanbul. Probably won't end up in curriculum.
    reporters: ['progress', 'kjhtml', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,

    // We can do other browsers as well, but Chrome is fine for curriculum.
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
