import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename"; // Для перейменування css файлу(переважно .min.css)

import cleanСss from "gulp-clean-css"; // Очищення та зжимання css файлу
import webpcss from "gulp-webpcss"; // Інтеграція webp в css
import autoprefixer from "gulp-autoprefixer"; // Додавання вендорних префіксів
import groupCssMediaQueries from "gulp-group-css-media-queries"; //  Для групування та  збирання всіх медіа запитів в кінець файлу

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(
      //Не потрібно для scss
      //       .pipe(app.html.fileInclude())
      sass({
        outputStyle: "expanded", // Для формування файлу не стисненим
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(
      webpcss({
        webpClass: ".webp",
        noWebpClass: ".no-webp",
      })
    )
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserlist: ["last 3 versions"],
        cascade: true,
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanСss())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};
