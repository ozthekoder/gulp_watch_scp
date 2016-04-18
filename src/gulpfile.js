import gulp from 'gulp';
import scp from 'gulp-scp2';
import config from '../config.json';

const onChange = (file) => {
  console.log(file);
  config.destinations.forEach((destination) => {
    gulp
    .src(file.path)
    .pipe(scp(destination))
    .on('error', (err) => console.log(err));
  });
}

gulp.task('watch', () => {
  gulp
  .watch(config.source + '/**/*.*')
  .on('change', onChange);
});

gulp.task('default', ['watch']);
