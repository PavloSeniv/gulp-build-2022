// Основний модуль
import gulp from "gulp"; //Ініціалізація gulp
// Імпорт шляхів
import { path } from "./gulp/config/path.js";
// Імпорт спільних плагінів
import { plugins } from "./gulp/config/plugins.js";

// Передача значення в глобальну змінну
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, otfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprite } from "./gulp/tasks/svgSprite.js";

// Слідкування за змінами в файлах у реальному часі
function watcher(params) {
  gulp.watch(path.watch.files, copy); //Для files
  gulp.watch(path.watch.html, html); //Для html
  gulp.watch(path.watch.scss, scss); // Для css
  gulp.watch(path.watch.js, js); // Для js
  gulp.watch(path.watch.images, images); // Для img
  // gulp.watch([path.watch.pluginsJs], pluginsJs); // Для plugins .js file
  // gulp.watch([path.watch.pluginsCss], pluginsCss); // Для plugins .css file
  // gulp.watch([path.watch.pluginsPhp], pluginsPhp); // Для plugins .php file
  // //gulp.watch([path.watch.libsCss], libsCss); // Для node_modules .css file
  // //gulp.watch([path.watch.libsCss], libsJs); // Для node_modules .js file
}

// npm run svgSprite
export { svgSprite }

// Послідовна обробка шрифтів
const fonts = gulp.series(otfToTtf, otfToWoff, fontsStyle);
// Основі завдання
const mainTasks =  gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Процес виконання
// Побудова сценаріїв виконування задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Виконування сценарію за замовчуванням
gulp.task("default", dev);
