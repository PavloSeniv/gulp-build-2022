import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

// const buildFolder = `./dist`; // Можна використовувати rootFolder
const buildFolder = rootFolder;

const srcFolder = `./src`;

export const path = {
  // Папка dist(видається замовнику)
  build: {
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,

    // pluginsJs: project_folder + "/plugins  /",
    // pluginsCss: project_folder + "/plugins/",
    // pluginsPhp: project_folder + "/plugins/",
  },

  //Папка із початковими файлами
  src: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*.html`,
    // html: `${srcFolder}/*.pug`, // Для pug
    scss: `${srcFolder}/scss/style.scss`,
    // css: `${srcFolder}/style/scss/style.scss`,
    js: [`${srcFolder}/js/app.js`, `${srcFolder}/js/plugins*.js`],
    //Якщо не  вказати розширення також іх верхнього регістру то можливий варіант не копіювання зображення
    images: `${srcFolder}/img/**/*.+(png|PNG|jpg|JPG|jpeg|JPEG|gif|ico|webp)`,
    svg: `${srcFolder}/img/**/*.svg`,
    svgicons: `${srcFolder}/svgicons/*.svg`,

    // pluginsJs: source_folder + "/plugins/**/*.js",
    // pluginsCss: source_folder + "/plugins/**/*.css",
    // pluginsPhp: source_folder + "/plugins/**/*.php",
  },

  //Об'єкт  для слідкування за файлами в реальному часі(browserSync)
  watch: {
    files: `${srcFolder}/files/**/*.*+(mp4|mp3|pdf)`,
    html: `${srcFolder}/**/*.html`,
    // html: `${srcFolder}/*.pug`, // Для pug

    scss: `${srcFolder}/scss/style.scss`,
    // css: `${srcFolder}/style/**/*.{css,scss,less,sass}`,
    js: [`${srcFolder}/js/**/*.js`],
    images: `${srcFolder}/img/**/*.+(png|PNG|jpg|JPG|gif|ico|svg|webp)`,

    // pluginsJs: source_folder + "/plugins/**/*.js",
    // pluginsCss: source_folder + "/plugins/**/*.css",
    // pluginsPhp: source_folder + "/plugins/**/*.php",
  },

  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: "",
};

//   concat = require("gulp-concat"); // Об'єдання файлів
// //uncss = require("gulp-uncss"); // Видалення невикористаних правил css

// function pluginsJs(params) {
//   return src(path.src.pluginsJs)
//     .pipe(fileinclude())
//     .pipe(dest(path.build.pluginsJs))
//     .pipe(uglify())
//     .pipe(
//       rename({
//         extname: ".min.js",
//       })
//     )
//     .pipe(dest(path.build.pluginsJs))
//     .pipe(browsersync.stream());
// }

// function pluginsCss(params) {
//   return src(path.src.pluginsCss)
//     .pipe(dest(path.build.pluginsCss))
//     .pipe(clean_css())
//     .pipe(
//       rename({
//         extname: ".min.css",
//       })
//     )
//     .pipe(dest(path.build.pluginsCss))
//     .pipe(browsersync.stream());
// }

// function pluginsPhp(params) {
//   return src(path.src.pluginsPhp)
//     .pipe(dest(path.build.pluginsPhp))
//     .pipe(browsersync.stream());
// }

// function libsCss(params) {
//   return gulp
//     .src([
//       "node_modules/normalize.css/normalize.css",
//       "node_modules/aos/dist/aos.css",
//     ])
//     .pipe(concat("_libs.scss"))
//     .pipe(gulp.dest("#src/style/scss"))
//     .pipe(browsersync.stream());
// }

// function libsJs(params) {
//   return gulp
//     .src(["node_modules/aos/dist/aos.js"])
//     .pipe(concat("libs.js"))
//     .pipe(uglify())
//     .pipe(gulp.dest("#src/plugins/libs"))
//     .pipe(browsersync.stream());
// }
