var gulp  = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
autoprefixer = require('autoprefixer'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
browserSync = require('browser-sync').create();


gulp.task('default', function(){
console.log("Hooray - you created a gulp task")
});


gulp.task('html', function(){
console.log("Image something useful being done to html");
});

gulp.task('styles', function(){
return gulp.src('./app/assets/styles/styles.css')
.pipe(postcss([cssimport,nested, autoprefixer, cssvars]))
.pipe(gulp.dest('./app/temp/styles'));
});






gulp.task('watch', function() {

browserSync.init({
notify: false,
server: {
baseDir: "app"
}
});

watch('./app/index.html', function(){
browserSync.reload();
});

watch('./app/assets/styles/**/*.css', function(){
gulp.start('cssInject');
});

});




gulp.task('cssInject', ['styles'],function(){
return gulp.src('./app/temp/styles/styles.css')
.pipe(browserSync.stream());
});