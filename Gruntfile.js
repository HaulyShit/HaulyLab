module.exports = function(grunt) {
	// var dir = {
	// css: 'assets/css/',
	// fonts: 'assets/fonts/',
	// images: 'assets/images/',
	// icons: 'assets/icons/',
	// js: 'assets/javascript/',
	// php: 'assets/php/',
	// polyfill: 'assets/polyfills/',
	// scss: 'assets/scss/',
	// scssTools: 'assets/scss/tools/',
	// };
	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		watch : {
			devphp : {
				files : ['patterns/**/*'],
				tasks : ['php2html']
			},
			devsass : {
				files : ['assets/scss/**/*.scss'],
				tasks : ['sass:dev']
			},
			devuglify : {
				files : ['assets/javascript/**/functions.js'],
				tasks : ['uglify:dev']
			},

			/*
			 * LAB-WATCHER
			 */
			labjs : {
				files : 'core/**/functions.js',
				tasks : ['uglify:lab']
			},

			labsass : {
				files : 'core/**/*.scss',
				tasks : ['sass:lab']
			},

			/*
			 * OPTIONS
			 */
			options : {
				livereload : true
			},
		},
		sass : {
			dev : {
				options : {
					style : 'compressed'
				},
				files : {
					'assets/css/style.css' : ['assets/scss/**/*.scss']
				}
			},

			/*
			 * LAB-SASS
			 */
			lab : {
				options : {
					style : 'compressed'
				},
				files : {
					'core/styles/style.css' : ['core/styles/scss/main.scss']
				}
			}
		},

		uglify : {
			dev : {
				files : {
					'assets/javascript/output.min.js' : ['assets/javascript/jquery.min.js', 'assets/javascript/functions.js']
				}
			},
			/*
			 * LAB-UGLIFY
			 */
			lab : {
				files : {
					'core/javascript/output.min.js' : ['core/javascript/jquery.min.js', 'core/javascript/functions.js']
				}
			},
		},

		php2html : {
			default : {
				options : {
					// relative links should be renamed from .php to .html
					processLinks : true,
				},
				files : [{
					expand : true,
					cwd : 'app/',
					src : ['patterns/03-modules/00-global/01-header.php'],
					dest : 'build',
					ext : '.html'
				}]
			}
		},
	});
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-php2html');
	// Default task(s).
	grunt.registerTask('default', ['watch:devphp', 'watch:devsass', 'watch:devuglify']);
	grunt.registerTask('lab', ['sass:lab', 'uglify:lab', 'watch:labjs', 'watch:labsass']);
};
