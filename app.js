// var createError = require('http-errors');
import createError from 'http-errors'
// var express = require('express');
import express from 'express'
// var path = require('path');
import path from 'path'
// var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
// var logger = require('morgan');
import logger from 'morgan'


// var indexRouter = require('./routes/index');
import indexRouter from './routes/index.js'
// var usersRouter = require('./routes/users');
import usersRouter from './routes/users.js'
// var newRouter = require('./routes/new')
import newRouter from './routes/new.js'

var app = express();

import { fileURLToPath } from 'url';

const getDirName= function(moduleURL){
  const filename=fileURLToPath(moduleURL)
  return path.dirname(filename);
}
const dirname =getDirName(import.meta.url)
// view engine setup
app.set('views', path.join(dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/new',newRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
export {
  getDirName
}
