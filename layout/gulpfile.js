var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', gulp.series(() => {
	/* Convert Sass to Css */
	return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest('src/css'));
}));
/* Watch for Updates */
gulp.task('watch', gulp.series(() => {
	gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'],
	gulp.parallel(['sass']));
}));
gulp.task('default', gulp.series(['sass', 'watch']));