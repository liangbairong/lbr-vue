const gulp=require('gulp')
const del = require('del');
// var process = require('child_process');
// process.exec('npm run docs:build', function (error) {
//   if (error !== null) {
//     console.log('exec error: ' + error);
//     return
//   }
  
// })

function cops(){
  return gulp.src('./docs/.vuepress/dist/**/*').pipe(gulp.dest('./docs_dist'))
}
function dels(){
  return del([
    './docs/.vuepress/dist/',
  ]);
}
gulp.task('default', gulp.series(cops, dels));