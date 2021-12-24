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

//   svgSprite = require("gulp-svg-sprite"), // Створення svg спрайтів