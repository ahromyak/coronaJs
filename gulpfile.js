/**
 * Created by deepwest83 on 9/3/2016.
 */
var gulp = require('gulp')
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
    sass = require('gulp-sass'),
    // sourcemaps = require('gulp-sourcemaps'),
    // rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');
    // rimraf = require('rimraf'),
    // browserSync = require("browser-sync");


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
            'src/main/webapp/js/src/moment-with-ru.min.js',
            'node_modules/angular-moment/angular-moment.min.js',
            'node_modules/twix/dist/twix.min.js',
            'src/main/webapp/js/src/lodash.min.js',
            'src/main/webapp/js/src/lodash.core.min.js',
            'src/main/webapp/js/src/ng-lodash.min.js'
        ])
        .pipe(newer(tempDir + 'source.min.js'))
        .pipe(concat('source.min.js'))
        .pipe(gulp.dest(tempDir))
});
gulp.task('make-js', function () {
    gulp.src('/app/**/js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('/app'));
});

gulp.task('make-css', function () {
    
});