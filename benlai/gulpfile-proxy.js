//引入插件
var gulp = require('gulp');
// var Proxy = require('gulp-connect-proxy');
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');
 
 
 
//使用connect启动一个Web服务器
gulp.task('connect', function () {
  connect.server({
    root: './',
    livereload: true,
    port: 8010,
    middleware: function (connect, opt) {
      return [
        proxy('/fs', {
          target: 'http://172.16.2.52:8080',
          changeOrigin:true
        }),
        proxy('/product', {
          target: 'http://172.16.1.60:8080',
          changeOrigin:true
        }),
        proxy('/bpauth', {
          target: 'http://192.168.24.77:8080',
          changeOrigin:true
        })
      ]
    }
  });
});
 
gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
 
});
 
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});
 
 
//运行Gulp时，默认的Task
gulp.task('default', ['connect', 'watch']);