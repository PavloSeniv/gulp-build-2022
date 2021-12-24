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


//   ttf2woff = require("gulp-ttf2woff"), // Конвертація шрифтів
//   ttf2woff2 = require("gulp-ttf2woff2"), // Конвертація шрифтів
//   fonter = require("gulp-fonter"), // Конвертація шрифтів з otf формату