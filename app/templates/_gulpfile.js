var gulp = require('gulp');
var sass = require('gulp-sass')
var tinylr = require('tiny-lr');
var express = require('express');
var path = require('path');

var paths = {
  html: ['app/**/*.html'],
  icons: ['app/*.ico'],
  script: ['bower_components/bootstrap/dist/js/*', 'bower_components/jquery/dist/*'],
  css: ['bower_components/bootstrap/dist/css/*'],
  fonts: ['bower_components/bootstrap/dist/fonts/*'],
  images: ['app/images/*'],
  sass: ['app/sass/*']
};

gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(gulp.dest('build/img'));
})

gulp.task('icons', function() {
  return gulp.src(paths.icons)
    .pipe(gulp.dest('build/'));
})

gulp.task('script', function() {
  return gulp.src(paths.script)
    .pipe(gulp.dest('build/js'));
})

gulp.task('css', function() {
  return gulp.src(paths.css)
    .pipe(gulp.dest('build/css'));
})

gulp.task('fonts', function() {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest('build/fonts'));
})

gulp.task('html', function() {
  return gulp.src(paths.html)
    .pipe(gulp.dest('build'));
})

gulp.task('sass', function() {
  return gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest('build/css'));
})

gulp.task('watch', function() {
  startExpress();
  startLiveReload();
});

function startExpress() {
  app = express()
  app.use(require('connect-livereload')())
  app.use(express.static('build'));
  app.listen(4000);
}

function startLiveReload() {
  lr = tinylr();
  lr.listen(35729);
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.fonts, ['fonts']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.script, ['script']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.icons, ['icons']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(['build/*', 'build/**/*'], notifyLiveReload);
}

function notifyLiveReload(event) {
  // `gulp.watch()` events provide an absolute path
  // so we need to make it relative to the server root
  var fileName = path.relative("build", event.path);
 
  lr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('default', ['images', 'icons', 'html', 'script', 'css', 'sass', 'fonts']);