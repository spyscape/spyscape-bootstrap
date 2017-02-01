const path = require('path');

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          loadPath: [
            path.join(__dirname, 'node_modules/bootstrap/scss')
          ]
        },
        files: {
          'dist/main.css': 'scss/main.scss'
        }
      }
    },
    pug: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          'index.html': 'index.pug'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      view: {
        files: ['index.pug'],
        tasks: ['pug']
      },
      styles: {
        files: 'scss/*.scss',
        tasks: 'sass'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'pug']);
  grunt.registerTask('build', ['sass']);
};
