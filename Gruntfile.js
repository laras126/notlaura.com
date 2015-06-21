'use strict';
module.exports = function(grunt) {
    
    // Load config
    var config = grunt.file.readYAML("Gruntconfig.yml"); 

    // Load all tasks
    require('load-grunt-tasks')(grunt);

    // Show elapsed time
    // require('time-grunt')(grunt);

    // Configure tasks
    require('./tasks/scss.js')(grunt, config);
    require('./tasks/javascript.js')(grunt, config);
    require('./tasks/utils.js')(grunt, config);
    require('./tasks/svgs.js')(grunt, config);


    // Register tasks
    grunt.registerTask('default', [
        'sass'
    ]);

    grunt.registerTask('js', [
        'bower_concat',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('build', [
        'uglify',
        'autoprefixer',
        'cssmin',
        // 'shell'
    ]);

    // Pretty redundant task here...
    grunt.registerTask('prep', [
        'uglify',
        'autoprefixer',
        'cssmin',
        'criticalcss'
    ]);

};
