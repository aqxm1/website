module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // Read package.json to get metadata

    // Compile SCSS to CSS
    sass: {
      dist: {
        files: {
          'www/assets/styles/main.css': 'src/assets/styles/main.scss'
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
          'www/assets/styles/main.min.css': 'www/assets/styles/main.css'
        }
      }
    },

    // Uglify Javascript
    uglify: {
      options: {
        banner: '/! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>/\n'
      },
      main: {
        expand: true,
        cwd: 'src/assets/scripts/',
        src: ['**/*.js'],
        dest: 'www/assets/scripts/',
        ext: '.min.js'
      },
      pages: {
        expand: true,
        cwd: 'src/pages/',
        src: ['**/*.js'],
        dest: 'www/pages/',
        ext: '.min.js'
      }
    },    
    

    // Minify HTML
    htmlmin: {
      indexDist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'www/index.html': 'src/index.html',
        }
      },

      pagesDist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        expand: true,
        cwd: 'src/pages/', // Source directory
        src: ['**/*.html'], // Match all HTML files
        dest: 'www/pages/', // Destination directory
        ext: '.html' // Minified file extension
      }
    },

    // Watch for changes and run tasks
    watch: {
      styles: {
        files: ['src/assets/styles/**/*.scss','src/assets/scripts/**/*.js','src/**/*.html'],
        tasks: ['sass','uglify','htmlmin','cssmin'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s)
  grunt.registerTask('default', ['sass','uglify','htmlmin','cssmin']);
};
