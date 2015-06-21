// Plugin dependencies
var gulp            = require('gulp')                         // Gulp

// -----------------------------------------------------------------------------
// Configurations
var packages        = './packages'                            // Packages

// -----------------------------------------------------------------------------
// Globs
var sass            = {
    src             : './src',                                // Sources
    dist            : './dist'                                // Distribution
};

// -----------------------------------------------------------------------------
// Packages
var packages        = {
  sass              : sass.src + '/**/*'                      // SASS
};

// -----------------------------------------------------------------------------
// Build tasks
// Concatenating, minifying, optimizing and organizing files

// Custom
gulp.task('build:sass.custom', function() {
  return gulp.src(packages.sass)
    .pipe(gulp.dest(sass.dist));
});
