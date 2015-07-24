module.exports = function (config) {
    config.set({
        frameworks: ['jspm', "jasmine"],
        files: [
            'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js'
        ],
        jspm: {
            config: "src/config.js",
            packages: "src/jspm_packages/",
            loadFiles: [
                'src/js/**/*.spec.js'
            ],
            serveFiles: [
                'src/js/**/!(*spec).js'
            ]
        },
        proxies: {
            '/src': '/base/src',
            '/jspm_packages/': '/base/src/jspm_packages/'
        },
        browsers: ["PhantomJS"],
        reporters: ["progress"],

        colors: true,
        captureTimeout: 60000,
        port: 9876,
        singleRun: true,
        autoWatch: false
    });
};
