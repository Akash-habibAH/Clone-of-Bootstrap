const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cleancss = require('gulp-clean-css');

// Compile SCSS to CSS
function styles() {
    return src('scss-files/**/*.scss') // source folder
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        // .pipe(cleancss({ compatibility: 'ie8' }))
        .pipe(dest('css')); // output folder
}

// Watcher task
function watchFiles() {
    watch('scss-files/**/*.scss', styles);
}

// Export tasks
exports.compilescss = styles;
exports.default = series(styles, watchFiles);