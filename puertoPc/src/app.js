var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override')
var session = require('express-session');
var cookieSession = require('./middlewares/cookieSessionM');

/* Routes */
var indexRouter = require('./routes/indexRouter');
var usersRouter = require('./routes/usersRouter');
var productRouter = require('./routes/productRouter');
var adminRouter = require('./routes/adminRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'puertopc',
  resave: false,
  saveUninitialized: true

}));

app.use(cookieSession);

/* Middlewares de routes */
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/productos', productRouter);
app.use('/admin', adminRouter);

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

module.exports = app;
