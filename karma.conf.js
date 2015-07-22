module.exports = function (config) {
    config.set({
        basePath: '.',
        "frameworks": ['jspm', "jasmine"],
        "plugins" : ['karma-jspm', 'karma-phantomjs-launcher'],
        files: [
            'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js'
        ],
        "jspm": {
            config: "src/config.js",
            loadFiles: [
                'src/js/**/*.spec.js'
            ],
            serveFiles: [
                'src/js/**/!(*spec).js'
            ]
        },
        "browsers": ["PhantomJS"],
        "reporters": ["progress"],

        "colors": true,
        "captureTimeout": 60000,
        "port": 9876,
        "singleRun": true,
        "autoWatch": false
    });
};