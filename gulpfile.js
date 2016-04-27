/**
 * Created by Konstantin Ehlers, entrecode GmbH, Stuttgart on 27.04.16.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./sass/xlcss.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify', ['sass'], function() {
  gulp.src('dist/xlcss.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['minify']);
});

gulp.task('build', ['minify']);

gulp.task('default', ['build']);