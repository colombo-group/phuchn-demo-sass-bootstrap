var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function() {
    gulp.src('app/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
});

gulp.task("bacon",function(){
	console.log("wow, bacon is so juicy!");
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});