const { src, dest, watch, series } = require("gulp");
const mode = require("gulp-mode")();
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

// tailwind task
function tailwindTask() {
  let processors; 
	processors = mode.production() ? [tailwindcss, autoprefixer, cssnano] : [tailwindcss];

  return src("src/css/style.css")
    .pipe(postcss(processors))
    .pipe(dest("static/css"));
}


// Gulp Workflow
function watchTask() {
	watch(["./layouts/**/*.html", "src/css/style.css"], series(tailwindTask));
}

let workflow = mode.production() ? series(tailwindTask) : series(tailwindTask, watchTask);
exports.default = workflow;