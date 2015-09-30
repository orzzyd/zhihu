var gulp = require('gulp');
var cssmin = require('gulp-minify-css');
var jsmin = require('gulp-uglify');
var jshint = require('gulp-jshint');
var imgmin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');

gulp.task('css',function(){
	gulp.src('css/*.css')
	.pipe(cssmin())
	.pipe(gulp.dest('_dest/css'));
});
gulp.task('js',function(){
	gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jsmin())
	.pipe(gulp.dest('_dest/js'));
	gulp.src('js/*/**')
	.pipe(gulp.dest('_dest/js'));

});
gulp.task('img',function(){
	gulp.src('img/*')
	.pipe(imgmin())
	.pipe(gulp.dest('_dest/img'));
});
gulp.task('html',function(){
	gulp.src('index.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('_dest'));
	gulp.src('html/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('_dest/html'));
});

gulp.task('default', function () {
	gulp.run('css','js','img','html');
});