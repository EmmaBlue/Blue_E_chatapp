const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest('./public/css'))
})

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss'), ['sass'];
});

