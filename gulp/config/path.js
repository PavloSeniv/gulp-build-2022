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

    // img: project_folder + "/img/",
    // video: project_folder + "/video/",
    // fonts: project_folder + "/fonts/",
    // pluginsJs: project_folder + "/plugins  /",
    // pluginsCss: project_folder + "/plugins/",
    // pluginsPhp: project_folder + "/plugins/",
    // pdf: project_folder + "/pdf/",
  },

  //Папка із початковими файлами
  src: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*.html`,
    // html: `${srcFolder}/*.pug`, // Для pug

    scss: `${srcFolder}/scss/style.scss`,
    // css: `${srcFolder}/style/scss/style.scss`,

    js: [
      `${srcFolder}/js/app.js`,
      `${srcFolder}/js/plugins*.js`,
    ],

    // //Якщо не  вказати розширення також іх верхнього регістру то можливий варіант не копіювання зображення
    // img: source_folder + "/img/**/*.+(png|PNG|jpg|JPG|gif|ico|svg|webp)",
    // video: source_folder + "/video/**/*.+(mp4|mp3)",
    // fonts: source_folder + "/fonts/*.ttf",
    // pluginsJs: source_folder + "/plugins/**/*.js",
    // pluginsCss: source_folder + "/plugins/**/*.css",
    // pluginsPhp: source_folder + "/plugins/**/*.php",
    // pdf: source_folder + "/pdf/**/*.pdf",
  },

  //Об'єкт  для слідкування за файлами в реальному часі(browserSync)
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/*.html`,
    // html: `${srcFolder}/*.pug`, // Для pug

    scss: `${srcFolder}/scss/style.scss`,
    // css: `${srcFolder}/style/**/*.{css,scss,less,sass}`,
    js: [`${srcFolder}/js/**/*.js`],
    // img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    // video: source_folder + "/video/**/*.+(mp4|mp3)",
    // pluginsJs: source_folder + "/plugins/**/*.js",
    // pluginsCss: source_folder + "/plugins/**/*.css",
    // pluginsPhp: source_folder + "/plugins/**/*.php",
    // pdf: source_folder + "/pdf/**/*.pdf",
  },

  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: "",
};

//   concat = require("gulp-concat"); // Об'єдання файлів
// //uncss = require("gulp-uncss"); // Видалення невикористаних правил css


// function video(params) {
//   return src(path.src.video)
//     .pipe(dest(path.build.video))
//     .pipe(browsersync.stream());
// }

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

// function pdf(params) {
//   return src(path.src.pdf).pipe(dest(path.build.pdf));
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
