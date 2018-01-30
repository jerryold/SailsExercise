var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
//app.use('/users', users);


var express = require('express');
var bodyParser = require('body-parser'); // npm install body-parser

var app = express();
app.use(bodyParser.urlencoded({ extended: true })); // 使用 body-parser 幫我們處理輸入資料





function is_leap_year(y) {
      // (是 4 的倍數 [且 &&] 不是 100 的倍數) [或者 ||] (是 400 的倍數)
    return y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
}

app.get('/', function(req, res, next) {
    res.send('<form action="/check_leap" method="post">' + // post 到 /check_leap
             '<input type="text" name="year"> ' +
             '<input type="submit" value="檢查閏年">' +
             '</form>');
});

// http://localhost:3000/check_leap?year=1000
app.get('/check_leap/', function(req, res, next) {
    var year = parseInt(req.query.year, 10);
    res.send("The result is :" + is_leap_year(year));
});

// http://localhost:3000/check_leap/2016
app.get('/check_leap/:year', function(req, res, next) {
    var year = parseInt(req.params.year, 10);
    res.send(is_leap_year(year));
});

app.post('/check_leap', function(req, res, next) {
    var year = parseInt(req.body.year, 10);
    if(is_leap_year(year)) {
        res.send(year + '是閏年');
    } else {
        res.send(year + '不是閏年');
    }
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
