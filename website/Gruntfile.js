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
      },
      uglify: {
        dest: {
          files: [
            { expand: true, cwd: 'dest/', src: '**/*.js', dest: 'dest/'}
          ],
          options: {
            sourceMap: true
          }
        }
      },
      watch: {
        all: {
          files: 'src/**/*.*',
          tasks: ['build'],
          options: {
            livereload: true
          }
        }
      }
    });


    grunt.registerTask('build', ['copy', 'browserify', 'uglify']);
    grunt.registerTask('default', ['build']);
};