var gulp  = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
console.log("Hooray - you created a gulp task")
});


gulp.task('html', function(){
console.log("Image something useful being done to html");
});

gulp.task('styles', function(){
console.log("Image SASS or POST css tasks running here");
});


gulp.task('watch', function() {

watch('./app/index.html', function(){
gulp.start('html');
});

watch('./app/assets/styles/**/*.css', function(){
gulp.start('styles');
});

});