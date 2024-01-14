module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // Read package.json to get metadata

    // Compile SCSS to CSS
    sass: {
      dist: {
        files: {
          'src/styles/main.css': 'src/styles/main.scss'
        }
      }
    },

    // Minify CSS
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      target: {
        files: {
          'src/styles/main.min.css': 'src/styles/main.css'
        }
      }
    },

    // Watch for changes and run tasks
    watch: {
      styles: {
        files: ['src/styles/**/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s)
  grunt.registerTask('default', ['sass', 'cssmin']);
};
