(function (console) {
  "use strict";

  var gulp = require("gulp");
  var bump = require("gulp-bump");
  var jshint = require("gulp-jshint");
  var rename = require("gulp-rename");
  var minifyCSS = require("gulp-minify-css");
  var sourcemaps = require("gulp-sourcemaps");
  var uglify = require('gulp-uglify');
  var usemin = require("gulp-usemin");
  var colors = require("colors");
  var runSequence = require("run-sequence");
  var bower = require("gulp-bower");
  var del = require("del");

  var appJSFiles = [
    "src/js/**/*.js",
    "!./src/components/**/*"
  ];

  gulp.task("clean-bower", function(cb){
    del(["./src/components/**"], cb);
  });

  gulp.task("clean", function (cb) {
    del(['./dist/**'], cb);
  });

  gulp.task("lint", function() {
    return gulp.src(appJSFiles)
      .pipe(jshint())
      .pipe(jshint.reporter("jshint-stylish"))
      .pipe(jshint.reporter("fail"));
  });

  gulp.task("components", function() {
    return gulp.src([
      "src/components/google-apis/*.html",
      "src/components/iron-jsonp-library/iron-jsonp-library.html",
      "src/components/moment/moment.js",
      "src/components/moment-timezone/builds/*.js",
      "src/components/polymer/*.*{html,js}",
      "src/components/rise-google-calendar/rise-google-calendar.html",
      "src/components/underscore/*.js",
      "src/components/webcomponentsjs/webcomponents*.js",
    ], {base: "./src/"})
      .pipe(gulp.dest("dist/"));
  });

  gulp.task("images", function() {
    return gulp.src([
      "src/img/**/*",
    ], {base: "./src/"})
      .pipe(gulp.dest("dist/"));
  });

  gulp.task("source", ["lint"], function () {
    return gulp.src(['./src/index.html'])
      .pipe(usemin({
        css: [sourcemaps.init(), minifyCSS(), sourcemaps.write()],
        js: [sourcemaps.init(), uglify(), sourcemaps.write()]
      }))
      .pipe(gulp.dest("dist/"));
  });

  // ***** Primary Tasks ***** //
  gulp.task("bower-clean-install", ["clean-bower"], function(cb){
    return bower().on("error", function(err) {
      console.log(err);
      cb();
    });
  });

  gulp.task("bump", function(){
    return gulp.src(["./package.json", "./bower.json"])
      .pipe(bump({type:"patch"}))
      .pipe(gulp.dest("./"));
  });

  gulp.task("build", function (cb) {
    runSequence(["clean"], "source", "images", "components", cb);
  });

  gulp.task("default", [], function() {
    console.log("********************************************************************".yellow);
    console.log("  gulp bower-clean-install: delete and re-install bower components".yellow);
    console.log("  gulp bump: increment the version".yellow);
    console.log("  gulp build: build component".yellow);
    console.log("********************************************************************".yellow);
    return true;
  });

})(console);
