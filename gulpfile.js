var gulp = require('gulp');
var scp = require('gulp-scp2');
var ips = [
  '162.243.99.75',
  '46.101.185.64',
  '162.243.205.141',
  '162.243.205.187',
  '162.243.205.188',
  '162.243.205.192'
];

function onChange(file) {
  ips.forEach(function(ip){
    gulp
    .src(file.path)
    .pipe(scp({
      host: ip,
      username: 'root',
      password: 'Kafa1500',
      dest: '/var/www/foo'
    }))
    .on('error', function(err) {
      console.log(err);
    });
  });
}

gulp.task('watch', function() {
  gulp
  .watch(['foo/**/*.*'])
  .on('change', onChange);
});

gulp.task('default', ['watch']);
