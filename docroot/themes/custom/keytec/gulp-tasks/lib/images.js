'use strict';

var del = require('del');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');

module.exports = function (gulp, config, tasks) {
  function syncImages (done) {
    gulp.src(config.images.src)
    .pipe(newer(config.images.dest))
    .pipe(imagemin({
      optimizationLevel: config.images.optimizationLevel,
      verbose: config.images.verbose
    }))
    .pipe(gulp.dest(config.images.dest))
    .on('end', function () {
      done();
    });
  };

  gulp.task('images', 'sync pattern-lab source images with drupal', syncImages);

  tasks.compile.push('images');

  // Clean: Images.
  gulp.task('clean:images', 'Delete synced image files', function(done) {
    del([config.images.dest]).then(function () {
      done();
    });
  });

  tasks.clean.push('clean:images');

  // Watch: Images.
  gulp.task('watch:images', function () {
    var tasks = ['images'];

    return gulp.watch(config.images.src, tasks);
  });

  tasks.watch.push('watch:images');
};
