module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {    
            dist: {
                files: {
                    'styles/css/styles.css': 'styles/sass/styles.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['styles/sass/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('dev', ['watch']);
};
