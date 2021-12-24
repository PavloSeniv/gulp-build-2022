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

    // css: project_folder + "/css/",
    // js: project_folder + "/js/",
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

    // js: [
    //   source_folder + "/js/main_script.js",
    //   source_folder + "/js/plugins*.js",
    // ],
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

    // js: source_folder + "/js/**/*.js",
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

//   uglify = require("gulp-uglify-es").default, // Оптимізація js
//   imagemin = require("gulp-imagemin"), // Оптимізація зображень
//   webp = require("gulp-webp"), // Для перетворення зображень у формат webp
//   webphtml = require("gulp-webp-html"), // Інтеграція webp в html
//   svgSprite = require("gulp-svg-sprite"), // Створення svg спрайтів
//   ttf2woff = require("gulp-ttf2woff"), // Конвертація шрифтів
//   ttf2woff2 = require("gulp-ttf2woff2"), // Конвертація шрифтів
//   fonter = require("gulp-fonter"), // Конвертація шрифтів з otf формату
//   concat = require("gulp-concat"); // Об'єдання файлів
// //uncss = require("gulp-uncss"); // Видалення невикористаних правил css


// //Копіювання .js з src до dist(якщо папки немає, вона створится gulp)
// function js() {
//   return src(path.src.js)
//     .pipe(fileinclude())
//     .pipe(dest(path.build.js))
//     .pipe(uglify())
//     .pipe(
//       rename({
//         extname: ".min.js",
//       })
//     )
//     .pipe(dest(path.build.js))
//     .pipe(browsersync.stream());
// }

// //Робота із зображеннями
// function images() {
//   return src(path.src.img)
//     .pipe(
//       webp({
//         quality: 70,
//       })
//     )
//     .pipe(dest(path.build.img))
//     .pipe(src(path.src.img))
//     .pipe(
//       imagemin({
//         progressive: true,
//         svgoPlugins: [{ remoteViewBox: false }],
//         interlaced: true,
//         optimizationLevel: 3, // 0 to 7
//       })
//     )
//     .pipe(dest(path.build.img))
//     .pipe(browsersync.stream());
// }

// function fonts(params) {
//   src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
//   return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts));
// }

// gulp.task("otf2ttf", function () {
//   return src([source_folder + "/fonts/*.otf"])
//     .pipe(
//       fonter({
//         formats: ["ttf"],
//       })
//     )
//     .pipe(dest(source_folder + "/fonts/"));
// });

// //Окреме завдання для створення svg спрайтів
// // gulp svgSprite in terminal
// gulp.task("svgSprite", function () {
//   return gulp
//     .src([source_folder + "/iconsprite/*.svg"])
//     .pipe(
//       svgSprite({
//         mode: {
//           stack: {
//             sprite: "../icons/icons.svg", //sprite file name
//             example: true,
//           },
//         },
//       })
//     )
//     .pipe(dest(path.build.img));
// });

// // Для автоматичного запису шрифтів в css
// function fontsStyle(params) {
//   let file_content = fs.readFileSync(source_folder + "/style/scss/_fonts.scss");
//   if (file_content == "") {
//     fs.writeFile(source_folder + "/style/scss/_fonts.scss", "", callBack);
//     return fs.readdir(path.build.fonts, function (err, items) {
//       if (items) {
//         let c_fontname;
//         for (var i = 0; i < items.length; i++) {
//           let fontname = items[i].split(".");
//           fontname = fontname[0];
//           if (c_fontname != fontname) {
//             fs.appendFile(
//               source_folder + "/style/scss/_fonts.scss",
//               '@include font("' +
//                 fontname +
//                 '", "' +
//                 fontname +
//                 '", "400", "normal");\r\n',
//               callBack
//             );
//           }
//           c_fontname = fontname;
//         }
//       }
//     });
//   }
// }

// function callBack() {}

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
