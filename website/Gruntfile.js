// Gruntfile.js
module.exports = function (grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      copy: {
        dist: {
          files: [
            { expand: true, cwd: 'src/', src: '**/*.html', dest: 'dest/'}
          ]
        }
      },
      browserify: {
        dist: {
          files: {
            'dest/js/app.js': 'src/js/app.jsx'
          },
          options: {
            transform: ['reactify']
          }
        }
      }
    });


    grunt.registerTask('default', ['copy', 'browserify']);
};