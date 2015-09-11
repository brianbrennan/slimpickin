

var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var util = require('gulp-util');
var browserSync = require('browser-sync').create();


var onError = function (err) {  
  util.beep();
  console.log(err);
  this.emit('end');
};

gulp.task('js', function() {
  return gulp.src('components/js/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./components'))
    .pipe(browserSync.stream());
});

gulp.task('src', function(){
  return gulp.src('src/slimpickin.js')
    .pipe(uglify())
    .pipe(gulp.dest('./components/slimpickin.min.js'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function(){
  return gulp.src('components/scss/style.scss')
  .pipe(plumber({
      errorHandler: onError
    }))
  .pipe(sass())
  .pipe(gulp.dest('components'))
  .pipe(browserSync.stream());
});



// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(["components/scss/*.scss","components/js/*.js"], ['sass','js']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass','serve']);