/**
 * Created by JBH on 2015/4/22.
 * 利用gulp的特性管道输出
 */
var gulp = require('gulp');

var minifyCSS = require('gulp-minify-css');

//创建启动任务
gulp.task('css', function() {
   //找到源文件夹
    gulp.src('css/*.css').pipe(minifyCSS()).pipe(gulp.dest('dist/css'));
});

//创建一个监听任务
gulp.task('auto', function(){
    gulp.watch('css/*.css', ['css']);
});

//创建默认任务
gulp.task('default', ['css', 'auto']);
