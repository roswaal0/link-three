/**
 * @author Oswaldo Pacheco
 */
(() => {
  'use strict';

  const CONFIG = require('./config/config.json');
  const gulp = require('gulp');
  const gulpInlineFonts = require('gulp-inline-fonts');

  const OPTIONS = {
    name: 'lt-icon',
    style: 'normal',
    weight: 'normal',
    formats: ['woff', 'woff2', 'ttf', 'eot', 'svg']
  };

  module.exports = () => {
    return gulp.src(CONFIG.folder.project.assets.fontsIcons + '/*')
        .pipe(gulpInlineFonts(OPTIONS))
        .pipe(gulp.dest(CONFIG.folder.target.fonts));
  }
})();
