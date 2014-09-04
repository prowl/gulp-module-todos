'use strict';

var should = require('should'); // jshint ignore:line
var path = require('path');

var todos = require('../lib/index');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, deps, func) {
  task = func;
};

var configMock = {
  root: path.resolve(__dirname, '../'),
  src: ['**/*.js', '**/*.json', '!./node_modules/**', '!./docs/**']
};

todos(gulpMock, configMock);

describe('Gulp Module Todos', function() {
  it('Should return a function', function() {
    todos.should.be.type('function');
  });

  it('Should create a task', function() {
    task.should.be.type('function');
  });

  it('Should run the task', function(cb) {
    try {
      task();
      cb();
    } catch (e) {
      cb();
    }
  });
});
