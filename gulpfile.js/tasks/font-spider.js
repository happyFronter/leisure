var gulp = require( 'gulp' ),
	config = require( '../config/font-spider'),
    // fontSpider = require( '../index' );
    fontSpider = require( 'gulp-font-spider' );

gulp.task( 'fontSpider', function(){
    return gulp.src(config.src)
    	.pipe(gulp.dest(config.dest))
        .pipe( fontSpider() );
});
console.log(1);
gulp.task( 'defualt', ['fontSpider'] );
// gulp.task( 'fontSpider', ['fontSpider'] );