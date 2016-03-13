var gulp = require('gulp');
var scp = require('gulp-scp2');
var config = require('./config.json');

function onChange(file) {
  config.destinations.forEach(function(destination){
    gulp
    .src(file.path)
    .pipe(scp(destination))
    .on('error', function(err) {
      console.log(err);
    });
  });
}

gulp.task('watch', function() {
  gulp
  .watch([config.source + '/**/*.*'])
  .on('change', onChange);
});

gulp.task('default', ['watch']);
