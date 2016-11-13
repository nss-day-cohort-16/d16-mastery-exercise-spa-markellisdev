module.exports = function(grunt) {
  grunt.initConfig({
    "jshint": {
      "files": ['../javascripts/**/*.js'], //location of javascript files
      "options": {
        "browser":true,
        "jquery": true,
        "predef": ["document", "console", "$", "CarLot"], //allows for predefined things not found in js
        "esnext": true, //allows for ES6
        "globalstrict": true,
        "globals": {CarLot: true} //name value pairs, allows to define global vars used in many files.
      }
    },
    copy: {
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist',
        src: ['**'],
        dest: '../dist'
      },
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.min.js'],
        dest: '../dist'
      }
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/quiz.css': '../sass/quiz.scss'
        }
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'copy','sass', 'watch']);
};