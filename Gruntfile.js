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

        'http-server': {

            'dev': {

                // the server root directory
                root: 'C:/Users/Dario Garcia Moya/Projects/flux-react-app',

                // the server port
                // can also be written as a function, e.g.
                // port: function() { return 8282; }
                port: 8282,

                // // the host ip address
                // // If specified to, for example, "127.0.0.1" the server will
                // // only be available on that ip.
                // // Specify "0.0.0.0" to be available everywhere
                host: '127.0.0.1',

                // cache: <sec>,
                // showDir : true,
                // autoIndex: true,

                // // server default file extension
                ext: 'html',

                // // run in parallel with other tasks
                runInBackground: false,

                // // Tell grunt task to open the browser
                openBrowser : true,

                // // customize url to serve specific pages
                customPages: {
                    '/': 'index.html'
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
    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('grunt-http-server', ['grunt-http-server']);
};
