var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require("./webpack.config.dev");

const port = 3000;
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res, next) {
	res.sendFile(path.join( __dirname, './src/index.html'));
	// next();
});

app.get('/test', function (req, res) {
	console.log("hello proxy")
});
console.log("started listening....")
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("http://localhost:${port}");
  }
});

// 
// var webpack = require("webpack");
// var express = require("express");
// var path = require("path");
// // var webpackDevServer = require('webpack-dev-server');
// var config = require("./webpack.config.dev");

// // new webpackDevServer(webpack(config), {

// // })

// /* eslint-disable no-console */

// const port = 3000;
// const app = express();
// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, './src/index.html'));
// });

// app.listen(port, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("http://localhost:${port}");
//   }
// });