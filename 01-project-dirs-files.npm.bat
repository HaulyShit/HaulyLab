mkdir assets
echo ^<!DOCTYPE html^> >index.html
echo ^<html^> >>index.html
echo 	^<head^> >> index.html
echo 		^<meta charset="utf-8"^> >> index.html
echo 		^<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"^> >> index.html
echo 		^<title^>HTML^</title^> >> index.html
echo 		^<meta name="description" content=""^> >> index.html
echo 		^<meta name="author" content="HaulyShit"^> >> index.html
echo 		^<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" /^> >> index.html
echo 		^<link rel="shortcut icon" href="/favicon.ico"^> >> index.html
echo 		^<link rel="apple-touch-icon" href="/apple-touch-icon.png"^> >> index.html
echo 	^</head^> >> index.html
echo 	^<body^> >> index.html
echo 	^</body^> >> index.html
echo ^</html^> >> index.html
mkdir assets\css
echo /******************************************************************************** > assets\scss\main.scss
echo  * @FRAMEWORK HaulyLab >> assets\scss\main.scss
echo  * @AUTHOR HaulyShit >> assets\scss\main.scss
echo  * @WEBSITE http://haulyshit.de >> assets\scss\main.scss
echo  * >> assets\scss\main.scss
echo  *******************************************************************************/ >> assets\scss\main.scss
mkdir assets\scss
mkdir assets\fonts
mkdir assets\images
mkdir assets\images\icons
mkdir assets\javascript
echo ///******************************************************************************** > assets\javascript\functions.js
echo // * jQuery Document ready >> assets\javascript\functions.js
echo ///*******************************************************************************/ >> assets\javascript\functions.js
echo $(function() { >> assets\javascript\functions.js
echo 	/******************************************************************************** >> assets\javascript\functions.js
echo 	 *      ___  __     __  ____   __   __      _  _   __   ____  ____  >> assets\javascript\functions.js
echo 	 *     / __)(  )   /  \(  _ \ / _\ (  )    / )( \ / _\ (  _ \/ ___) >> assets\javascript\functions.js
echo 	 *    ( (_ \/ (_/\(  O )) _ (/    \/ (_/\  \ \/ //    \ )   /\___ \ >> assets\javascript\functions.js
echo 	 *     \___/\____/ \__/(____/\_/\_/\____/   \__/ \_/\_/(__\_)(____/ >> assets\javascript\functions.js
echo 	 * >> assets\javascript\functions.js
echo 	/*******************************************************************************/ >> assets\javascript\functions.js
echo 	/******************************************************************************** >> assets\javascript\functions.js
echo 	 *     ____   __   _  _  _  _   __   ____  _  _  __  __ _   ___  >> assets\javascript\functions.js
echo 	 *    (    \ /  \ ( \/ )/ )( \ / _\ / ___)/ )( \(  )(  ( \ / __) >> assets\javascript\functions.js
echo 	 *     ) D ((  O )/ \/ \) __ (/    \\___ \) __ ( )( /    /( (_ \ >> assets\javascript\functions.js
echo 	 *    (____/ \__/ \_)(_/\_)(_/\_/\_/(____/\_)(_/(__)\_)__) \___/ >> assets\javascript\functions.js
echo 	 * >> assets\javascript\functions.js
echo 	 *******************************************************************************/ >> assets\javascript\functions.js
echo }); >> assets\javascript\functions.js
mkdir assets\polyfills
mkdir assets\php
echo module.exports = function(grunt) { > Gruntfile.js
echo 	var dir = { >> Gruntfile.js
echo			css: 'assets/css/', >> Gruntfile.js
echo			fonts: 'assets/fonts/', >> Gruntfile.js
echo			images: 'assets/images/', >> Gruntfile.js
echo			icons: 'assets/icons/', >> Gruntfile.js
echo			js: 'assets/javascript/', >> Gruntfile.js
echo			php: 'assets/php/', >> Gruntfile.js
echo			polyfill: 'assets/polyfills/', >> Gruntfile.js
echo			scss: 'assets/scss/', >> Gruntfile.js
echo			scssTools: 'assets/scss/tools/', >> Gruntfile.js
echo 	}; >> Gruntfile.js
echo 	// Project configuration. >> Gruntfile.js
echo 	grunt.initConfig({ >> Gruntfile.js
echo    		pkg: grunt.file.readJSON('package.json'), >> Gruntfile.js
echo 		watch: { >> Gruntfile.js
echo				sass: { >> Gruntfile.js
echo					files: '^<%% ^dir^.^scss %%^>**/*.scss', >> Gruntfile.js
echo					tasks: 'scss' >> Gruntfile.js
echo				}, >> Gruntfile.js
echo			}, >> Gruntfile.js
echo			options: { >> Gruntfile.js
echo				livereload: true >> Gruntfile.js
echo			}, >> Gruntfile.js

echo			sass: { >> Gruntfile.js
echo				scripts: { >> Gruntfile.js
echo					options: { >> Gruntfile.js
echo						style: 'compressed' >> Gruntfile.js
echo					}, >> Gruntfile.js
echo					files: { >> Gruntfile.js
echo						'^<%% dir.css %%^>/style.css': ['^<%% dir.scss %%^>/main.scss'] >> Gruntfile.js
echo					} >> Gruntfile.js
echo				} >> Gruntfile.js
echo			}, >> Gruntfile.js

echo			uglify: { >> Gruntfile.js
echo				scripts: { >> Gruntfile.js
echo					files: { >> Gruntfile.js
echo						'^<%% dir.js %%^>/output.min.js': ['^<%% dir.js %%^>/jquery.min.js', '^<%% dir.js %%^>/functions.js.js'] >> Gruntfile.js
echo					} >> Gruntfile.js
echo				} >> Gruntfile.js
echo			} >> Gruntfile.js
echo		}); >> Gruntfile.js
echo		// Load the plugin that provides the "uglify" task. >> Gruntfile.js
echo		grunt.loadNpmTasks('grunt-contrib-sass'); >> Gruntfile.js
echo		grunt.loadNpmTasks('grunt-contrib-uglify'); >> Gruntfile.js
echo		grunt.loadNpmTasks('grunt-contrib-watch'); >> Gruntfile.js
echo		// Default task(s). >> Gruntfile.js
echo		grunt.registerTask('default', ['sass','uglify','watch']); >> Gruntfile.js
echo }; >> Gruntfile.js
call npm init
call npm install -g grunt-cli
call npm install grunt-contrib-watch --save-dev
call npm install grunt-contrib-uglify --save-dev
call npm install grunt-contrib-sass --save-dev
xcopy node_modules\jquery\dist\jquery.min.js assets\javascript\*.* /s
call npm install jquery
grunt