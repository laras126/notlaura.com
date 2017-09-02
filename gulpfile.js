
'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    babel = require('gulp-babel'),
    addsrc = require('gulp-add-src'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sass = require('gulp-sass'),
    svgmin = require('gulp-svgmin'),
    svgstore = require('gulp-svgstore'),
    path = require('path'),
    notify = require('gulp-notify'),
    autoprefix = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    livereload = require('gulp-livereload'),
    cheerio = require('gulp-cheerio');

// Put JS files into array
var jsFileList = [
  './assets/js/src/plugins.js',
  './assets/js/src/main.js'
];

// var entryPoint = './assets/js/src/main.js';

gulp.task('sass', function() {
  return gulp.src('assets/scss/main.scss')
    .pipe(sass({
      errLogToConsole: false,
      onError: function(err) {
        return notify().write(err);
      }
    }))
    // TODO enable
    // .pipe(autoprefix({
    //     browsers: 'last 5 versions'
    // }))
    .pipe(gulp.dest('./assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('./assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// https://gist.github.com/dverbovyi/7f71879bec8a16847dee
// gulp.task('js', function() {
//   return browserify(entryPoint, {debug: true, extensions: ['es6']})
//     .transform("babelify", {presets: ["es2015"]})
//     .bundle()
//     .pipe(source('./assets/js/src/bundle.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('./assets/js/build/'))
// });


gulp.task('js', function() {
  return gulp.src('./assets/js/src/main.js')
    // .pipe(babel({
    //         presets: ['es2015']
    //     }))
    .pipe(addsrc.prepend('./assets/js/src/plugins.js'))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('assets/js/build'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/js/build'));
});

gulp.task('svgs', function () {
  return gulp.src('assets/img/svg/*.svg')
    .pipe(rename({prefix: 'svg-'}))
    .pipe(cheerio({
        run: function ($) {
            $('[fill]').removeAttr('fill');
        },
        parserOptions: { xmlMode: true }
    }))
    .pipe(svgmin(function (file) {
        var prefix = path.basename(file.relative, path.extname(file.relative));
        return {
          plugins: [{
            cleanupIDs: {
              prefix: prefix + '-',
              minify: true,
            }
          }]
        }
    }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('svg-defs.svg'))
    .pipe(gulp.dest('views/partials'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
      proxy: "nl.local"
  });
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('assets/js/src/*.js', ['js']);
});


