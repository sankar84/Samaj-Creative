// npm install -g grunt-cli
// npm install
// grunt min

module.exports = function (grunt) {
    'use strict';
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
        	all: ['temp', 'dev', '.tmp', 'dist'],
        	dev: ['dev']
        },        

        copy: {
			fatcopy: {
				expand: true,
				cwd: 'html/',
				src: ['**'],
				dest: 'dev/'
			},
			main: {
				expand: true,
				cwd: 'html/',
				src: ['**', '!**/*.js', '!**/*.css'],
				dest: 'dist/'
			},
			file: {
				expand: true,
				cwd: 'html/',
				src: ['**', '!**/*.js', '!**/*.css'],
				dest: 'dev/'
			},
			temp: {
				expand: true,
				cwd: 'html/',
				src: ['**'],
				dest: 'temp/'
			},
			endmincopy: {
				expand: true,
				cwd: 'dist/',
				src: ['**'],
				dest: 'dev/'
			}
        },
        
        rev: {
            files: {
                src: ['dist/**/*.{js,css}']
            }
        },

        useminPrepare: {
            html: 'temp/index.html'
        },

        usemin: {
            html: ['dist/index.html']
        },

        uglify: {
            options: {
				compress: {
					drop_console: true
      			},
                report: 'min',
                mangle: false,
        		sourceMap: true,
        		sourceMapName: 'dist/js/samaj-source.map'
            }
        }
		
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
    
    grunt.task.registerTask('default', [
        'clean:dev',  'copy:fatcopy'
    ]);
	
    grunt.task.registerTask('min', [
        'clean:all', 'copy:temp', 'copy:main', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'rev', 'usemin', 'copy:endmincopy'
    ]);

};
