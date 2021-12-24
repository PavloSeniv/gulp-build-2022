import replace from "gulp-replace"; // Пошук та заміна
import plumber from "gulp-plumber"; // Обробка помилок 
import notify from "gulp-notify"; // Сповіщення (підказки)
import browsersync from "browser-sync"; // Локальний сервер

// Ескспорт об'єкту
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
};