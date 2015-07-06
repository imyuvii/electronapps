module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-electron-installer');

   // Project configuration.
    grunt.initConfig({
    
        // Load the installation plugin
        'create-windows-installer': {
            appDirectory: 'C:\electron\second',
            outputDirectory: 'C:\electron\second\installer',
            authors: 'Azilen Labs',
            exe: 'tech-manthan.exe'
        }
    });

    grunt.registerTask('default', 'create-windows-installer');
};