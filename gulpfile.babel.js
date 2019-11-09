import gulp from 'gulp'
import webpackConfig from './webpack.config'
import webpack from 'webpack-stream'
import browserSync from 'browser-sync'
import notify from 'gulp-notify'
import plumber from 'gulp-plumber'
import eslint from 'gulp-eslint'

gulp.task('build', function () {
    gulp.src('src/js/app.js')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/js/'));
});
gulp.task('browser-sync', function () {
  browserSync.init({
      server: {
          baseDir: "./",
          index: "index.html"
      }
  });
});
gulp.task('bs-reload', function () {
   browserSync.reload();
});

gulp.task('eslint', function () {
    return gulp.src(['src/**/*.js'])
        .pipe(plumber({
            errorHandler: function(error){
                const taskName = 'eslint';
                const title = '[task]' + taskName + ' ' + error.plugin;
                const errorMsg = 'error: ' + error.message;
                console.error(title + '\n' + errorMsg);

                notify.onError({
                    title: title,
                    message: errorMsg,
                    time: 3000
                });
            }
        }))
        .pipe(eslint({ useEslintrc: true}))
        .pipe(eslint.format())
        .pipe(eslint.failOnError())
        .pipe(plumber.stop());
});

gulp.task('default', ['eslint', 'build', 'browser-sync'], function () {
   gulp.watch(['./src/**/*.js','./src/components/*.js'], ['build']);
   gulp.watch('./*.html', ['bs-reload']);
   gulp.watch('./dist/**/*.+(js|css)', ['bs-reload']);
   gulp.watch('./src/**/*.js', ['eslint']);
});