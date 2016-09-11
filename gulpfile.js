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
    pngquant = require('imagemin-pngquant'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename');

var paths = {
    scripts: ['main.js', 'app/**/js/*.js'],
    css: ['app/**/scss/*.scss']
};

gulp.task('source-concat', function () {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/angular-aria/angular-aria.min.js',
            'node_modules/angular-ui-router/release/angular-ui-router.min.js',
            'node_modules/moment/moment.js',
            'node_modules/moment/locale/de.js',
            'node_modules/angular-moment/angular-moment.min.js',
            'node_modules/material-design-lite/material.min.js',
            'assets/js/lodash.min.js',
            'assets/js/lodash.core.min.js'
        ])
        .pipe(concat('lib.js'))
        .pipe(jsmin())
        .pipe(gulp.dest('app'));
});

gulp.task('make-js', function () {
    gulp.src(['main.js',
        'mainController.js', 
        'app/**/js/*.js'])
        .pipe(concat('app.js'))
        .pipe(jsmin())
        .pipe(gulp.dest('app'));
});

gulp.task('make-sourcecss', function () {
    gulp.src([
        'node_modules/material-design-lite/material.min.css',
        'assets/css/greygold.min.css'
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(concat('source.css'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('make-css', function () {
    gulp.src([
        'app/**/scss/*.scss'
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['make-js']);
    gulp.watch(paths.css, ['make-css']);
});

gulp.task('default', ['make-css', 'make-sourcecss', 'make-js', 'make-js', 'source-concat']);