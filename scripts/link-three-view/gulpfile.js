/**
 * @author Oswaldo Pacheco
 */
module.exports = () => {
  'use strict';

  require("./watch-angular/gulpfile")();
  require("./watch-styles/gulpfile")();

  const gulp = require('gulp');

  const angularPackage = require('./build/angular-package');

  const stylesClean = require('./build/styles-clean');
  const fontsCompileIcons = require('./build/fonts-compile-icons');
  const stylesCompileScss = require('./build/styles-compile-scss');
  const stylesPackage = require('./build/styles-package');
  const stylesDeployCss = require('./build/styles-deploy-css');
  const stylesDeployImages = require('./build/styles-deploy-images');

  gulp.task('link-three-view:angular-package', angularPackage);

  gulp.task('link-three-view:styles-clean', stylesClean);
  gulp.task('link-three-view:fonts-compile-icons', fontsCompileIcons);
  gulp.task('link-three-view:fonts-compile', gulp.series(
    'link-three-view:fonts-compile-icons'
  ));
  gulp.task('link-three-view:styles-compile-scss', stylesCompileScss);
  gulp.task('link-three-view:styles-package', stylesPackage);
  gulp.task('link-three-view:styles-deploy-css', stylesDeployCss);
  gulp.task('link-three-view:styles-deploy-images', stylesDeployImages);

  gulp.task('link-three-view:styles-deploy', gulp.series(
    'link-three-view:styles-deploy-css',
    'link-three-view:styles-deploy-images'
  ));

  gulp.task('link-three-view:angular', gulp.series(
    'link-three-view:angular-package'
  ));

  gulp.task('link-three-view:styles', gulp.series(
    'link-three-view:styles-clean',
    'link-three-view:fonts-compile',
    'link-three-view:styles-compile-scss',
    'link-three-view:styles-package',
    'link-three-view:styles-deploy'
  ));

  gulp.task('link-three-view', gulp.series(
    'link-three-view:angular',
    'link-three-view:styles'
  ));
};
