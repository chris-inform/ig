var gulp = require('gulp'),
	less = require('gulp-less'),
	minifyCSS = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	spritesmith = require('gulp.spritesmith'),
	uglify = require('gulp-uglify'),
	autoprefixer = require('gulp-autoprefixer'),
    imageop = require('gulp-image-optimization');

gulp.task('sprites', function () {
    var spriteData =
      gulp.src('dev/imgs/audiences/*') // source path of the sprite images
        .pipe(spritesmith({
            imgName: 'audiences.png',
            cssName: 'audiences.css',
            imgPath: '../imgs/audiences.png'
        }));

    spriteData.img.pipe(gulp.dest('./imgs')); // output path for the sprite
    spriteData.css.pipe(gulp.dest('./css/sprites')); // output path for the CSS
});

gulp.task('imagemin', function(cb) {
    // gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
    gulp.src(['imgs/*']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('imgs')).on('end', cb).on('error', cb);
});

gulp.task('scripts', function () {

    gulp.src([
            'js/scrolloverflow.js',
            'js/jquery.fullpage.js',
            'js/bootstrap.min.js',
            'js/custom.js'
            ])
	.pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'));

});

gulp.task('less', function () {

    gulp.src('dev/css/custom.less')
	.pipe(less())
	.pipe(minifyCSS())
	.pipe(gulp.dest('./css'))

});

gulp.task('default', function () {
    gulp.watch('js/custom.js', ['scripts']);
    gulp.watch('dev/css/**/*.less', ['less']);
});