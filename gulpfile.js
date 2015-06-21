// Plugin dependencies
var gulp            = require('gulp'),                        // Gulp
    rename          = require('gulp-rename')                  // Rename

// -----------------------------------------------------------------------------
// Configurations
var packages        = './packages'                            // Packages

// -----------------------------------------------------------------------------
// Globs
var sass            = {
    src             : './src',                               // JS - Sources
    dist            : './dist'                               // JS - Distribution
};

// -----------------------------------------------------------------------------
// Packages
var packages        = {
  sass              : sass.src + '/**/*'                     // SASS
};

// -----------------------------------------------------------------------------
// Build tasks
// Concatenating, minifying, and optimizing files

// Custom
gulp.task('build:sass.custom', function() {
  return gulp.src(packages.sass)
    .pipe(gulp.dest(sass.dist));
});
