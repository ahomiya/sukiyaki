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

  // SASS
  sass: {
    libraries: [
      sass.src + '/**/*'
    ]
  }

};

// -----------------------------------------------------------------------------
// Build tasks
// Concatenating, minifying, and optimizing files

// Custom
gulp.task('sass.build.custom', function() {
  return gulp.src(packages.sass.libraries)
    .pipe(gulp.dest(sass.dist));
});
