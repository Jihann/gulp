/**
 * Created by JBH on 2015/4/22.
 * 利用gulp的特性管道输出
 */
var gulp = require('gulp');

var uglify = require('gulp-uglify');

//创建启动任务
gulp.task('script', function() {
   //找到源文件夹
    gulp.src('js/*.js').pipe(uglify()).pipe(gulp.dest('dist/js'));
});

//创建一个监听任务
gulp.task('auto', function(){
    gulp.watch('js/*.js', ['script']);
});

//创建默认任务
gulp.task('default', ['script', 'auto']);
