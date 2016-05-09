module.exports = function (grunt) {
    grunt.initConfig({
    nwjs: {
        options: {
            platforms: ['win','osx'],
            buildDir: './build', 
            version: '0.12.1'
        },
        src: ['index.html',
            'package.json',
            './public/**/*',
            './node_modules/mysql/**/*'] // Your NW.js app
    },
    })
    
    grunt.loadNpmTasks('grunt-nw-builder');

    grunt.registerTask('build', ['nwjs']);

};
