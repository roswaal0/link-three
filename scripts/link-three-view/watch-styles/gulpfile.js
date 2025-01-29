/**
 * @author Oswaldo Pacheco
 */
module.exports = () => {
  'use strict';

  const gulp = require('gulp');

  const watchLinkThreeViewCss = require('./watch-link-three-view-css');

  gulp.task('watch-link-three-view:styles', watchLinkThreeViewCss);

  gulp.task('link-three-all:styles-watch', gulp.parallel(
      'watch-link-three-view:styles'
  ));
};

