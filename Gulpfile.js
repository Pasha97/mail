var gulp = require("gulp"),
    less = require('gulp-less'),
    glob = require("glob"),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    ts = require('gulp-typescript');
    svgstore = require("gulp-svgstore");
    svgmin = require("gulp-svgmin");
    path = require('path');
    rename = require("gulp-rename");
    inject = require("gulp-inject");
    concat = require("gulp-concat");
    gutil = require("gulp-util");
    // webpack = require("webpack");
    webpack = require("gulp-webpack");

gulp.task('default', ['watch']);


gulp.task('less', ()=>{
    return gulp.src('src/assets/themes/base/fonts/styles/**/**/*.less') // Источник
        .pipe(less()) // Преобразуем less в CSS
        .pipe(autoprefixer({
            browsers: [
                "last 2 versions",
                "safari 5",
                "ie 10",
                "ie 11"
            ],
            cascade: true
        }))
        .pipe(gulp.dest('src/assets/themes/base/fonts/styles/css')) // Выгружаем результата
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('browser-sync',()=> { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: './' // Директория для сервера
        },
        port: 9091,
        files: [
            "./*.html"
        ]
    });
});

gulp.task('ts',()=>{
    return gulp.src('src/app/**/*.ts')
        .pipe(ts(
            {
                target:'es5'
            }
        ))
        .pipe(gulp.dest('src/app/js/'))
    });

gulp.task('svgstore', () => {
    let svgs=gulp.src("src/assets/themes/base/fonts/images/svg/*.svg")
        .pipe(svgmin((file) => {
            let prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + "-",
                        minify: true
                    }
                }]
            };
        }))
        .pipe(rename({prefix: "icon-"}))
        .pipe(svgstore({inlineSvg: true}))

    function fileContents (filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src("./*.html")
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest("./"));
});


// gulp.task('webpack', function() {
//     return gulp.src('src/app/js/*.*.js')
//         .pipe(webpack({
//             module.exports = {
//                 entry: {
//                 select: "./src/app/js/select.components",
//                 module: "./src/app/js/module.components",
//
//             },
//             output:{
//                 filename: "app.components.js"
//             },
//             mode: 'none'
//
//
//     })).pipe(gulp.dest('js/'));
// });


gulp.task('watch', ['browser-sync', 'less', 'ts'], () =>{
    gulp.watch('src/assets/themes/base/fonts/styles/**/**/*.less',['less']);
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./*.js', browserSync.reload);
});


