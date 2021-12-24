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

//   imagemin = require("gulp-imagemin"), // Оптимізація зображень
//   webp = require("gulp-webp"), // Для перетворення зображень у формат webp