const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const paths = {
    scss : 'src/SCSS/**/*.scss',
    css : 'src'
}

const SASS = ()=>{
    return src(paths.scss)
    .pipe(sass())
    .pipe(dest(paths.css));
}

const seeArchive = ()=>{
    watch(paths.scss, SASS);
}

exports.SASS = SASS;
exports.seeArchive = seeArchive;

exports.default = series(SASS, seeArchive);
