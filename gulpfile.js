'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function () {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('develop', function () {
    gulp.watch('./app/scss/**/*.scss', ['scss']);
});