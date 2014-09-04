'use strict';
var todo = require('gulp-todo');
var path = require('path');
var fs = require('fs');

// store a local reference to our parameters
var gulp = null;
var config = null;

/**
 * Adds the todotask to the gulp reference
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration options
 */
function todoSetup(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('todo', false, todoTask);
}

/**
 * Runs the todotask
 */
function todoTask() {
  var todoFile = path.resolve(config.root, 'todo.md');

  fs.writeFileSync(todoFile, '', {encoding: 'UTF-8'});

  return gulp.src(config.src)
    .pipe(todo({fileName: 'todo.md'}))
    .pipe(gulp.dest('./'));
}

module.exports = todoSetup;
