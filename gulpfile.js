/**
 * Created by deepwest83 on 9/3/2016.
 */
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

// const lib = [
//     'node_modules/es6-shim/es6-shim.min.js',
//     'node_modules/systemjs/dist/system-polyfills.js',
//     'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
//     'node_modules/angular2/bundles/angular2-polyfills.min.js',
//     'node_modules/systemjs/dist/system.src.js',
//     'node_modules/rxjs/bundles/Rx.min.js',
//     'node_modules/angular2/bundles/angular2.min.js',
//     'node_modules/angular2/bundles/http.dev.js',
//     'node_modules/angular2/bundles/router.dev.js'
// ];

gulp.task('source-concat', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/angular-aria/angular-aria.min.js',
            'node_modules/angular-material/angular-material.min.js',
            'node_modules/angular-moment/angular-moment.min.js',
            'assets/js/lodash.min.js',
            'assets/js/lodash.core.min.js'
        ])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('app'));
});

gulp.task('make-js', function () {
    gulp.src('app/**/js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app'));
});

gulp.task('make-css', function () {
    gulp.src('app/**/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});