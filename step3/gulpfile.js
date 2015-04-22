/**
 * Created by JBH on 2015/4/22.
 * 利用gulp的特性管道输出
 */
var gulp = require('gulp');

var imagemin = require('gulp-imagemin');

//创建启动任务
gulp.task('images', function() {
   //找到源文件夹
    gulp.src('images/*.*').pipe(imagemin({progressive: true})).pipe(gulp.dest('dist/images'));
});

//创建一个监听任务
gulp.task('auto', function(){
    gulp.watch('images/*.*', ['images']);
});

//创建默认任务
gulp.task('default', ['images', 'auto']);
