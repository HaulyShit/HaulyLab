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
   		pkg: grunt.file.readJSON('package.json'), 
		watch: { 
			/*
			 * LAB-WATCHER
			 */
			labjs: { 
				files: 'core/**/functions.js', 
				tasks: ['uglify:lab'] 
			}, 
			
			labsass: { 
				files: 'core/**/*.scss', 
				tasks: ['sass:lab'] 
			},
			
			/*
			 * OPTIONS
			 */
			options: { 
				livereload: true 
			}, 
		}, 
		sass: {
			/*
			 * LAB-SASS
			 */
			lab: {
				options: { 
					style: 'compressed' 
				}, 
				files: { 
					'core/styles/style.css': ['core/styles/scss/main.scss'] 
				} 
			}
		}, 
		
		uglify: { 
			/*
			 * LAB-UGLIFY
			 */
			lab: { 
				files: { 
					'core/javascript/output.min.js': ['core/javascript/jquery.min.js', 'core/javascript/functions.js'] 
				} 
			},
		} 
	}); 
	// Load the plugin that provides the "uglify" task. 
	grunt.loadNpmTasks('grunt-contrib-sass'); 
	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	grunt.loadNpmTasks('grunt-contrib-watch'); 
	// Default task(s). 
	// grunt.registerTask('default', ['sass:scripts','uglify:scripts','watch:sass']); 
	grunt.registerTask('lab', [	'sass:lab',
								'uglify:lab',
								'watch:labjs',
								'watch:labsass'
								]); 
}; 
