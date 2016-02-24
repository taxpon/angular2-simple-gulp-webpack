var gulp = require("gulp");
var uglify = require("gulp-uglify");
var plumber = require("gulp-plumber");

// Webpack
var webpack = require("gulp-webpack");
var config = require("./webpack.config.js");

// BrowserSync
var browserSync = require("browser-sync");
var reload = browserSync.reload;

browserSync({
        server: "./build"
    });

gulp.task("copy-libs", function(){
    return gulp.src([
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js'
    ])
    .pipe(gulp.dest('build/js/lib'));
});

gulp.task("webpack", function() {
    gulp.src(config.entry)
        .pipe(plumber())
        .pipe(webpack(config))
        .pipe(uglify())
        .pipe(gulp.dest("build/js"))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task("watch", function(){
    gulp.watch("src/**/*.ts", ["webpack"]);
});

gulp.task("default", ["watch"]);