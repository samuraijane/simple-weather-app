const babel = require("gulp-babel"),
  clean = require("gulp-clean-css"),
  concat = require("gulp-concat"),
  gulp = require("gulp"),
  livereload = require("gulp-livereload"),
  nodemon = require("gulp-nodemon"),
  plumber = require("gulp-plumber"),
  rename = require("gulp-rename"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify"),
  wait = require("gulp-wait");

const source = {
  css: "./src/scss/style.scss",
  html: ["./public/*.html", "./src/views/**/*.html"],
  js: "./src/js/*.js",
  public: "./public",
  scss: "./src/scss/*.scss"
};

const destination = {
  public: "./public"
};

gulp.task("html", () => {
  return gulp.src(source.html).pipe(livereload());
});

gulp.task("js", () => {
  return gulp
    .src(source.js)
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      concat("app.min.js", {
        newLine: "\n;" //c025
      })
    )
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(plumber.stop())
    .pipe(gulp.dest(destination.public))
    .pipe(wait(1000)) //c026
    .pipe(livereload());
});

gulp.task("sass", () => {
  return gulp
    .src(source.css)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(clean({ compatibility: "ie8" }))
    .pipe(sourcemaps.write())
    .pipe(rename({ basename: "style.min" }))
    .pipe(gulp.dest(destination.public))
    .pipe(livereload());
});

gulp.task("watch", () => {
  livereload.listen();
  // gulp.watch(source.html, ["html"]);
  // gulp.watch(source.js, ["js"]);
  // gulp.watch(source.scss, ["sass"]);
  gulp.watch(source.html, gulp.series("html"));
  gulp.watch(source.js, gulp.series("js"));
  gulp.watch(source.scss, gulp.series("sass"));
  return nodemon({
    script: "server.js"
  });
});
