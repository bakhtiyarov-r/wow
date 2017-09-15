"use strict";

var angular = require('angular');
var angularRoute = require('angular-route');

var app = angular.module('wowApp', ['ngRoute']);

require('./controllers/taskController')(app);
require('./controllers/navController')(app);
require('./router')(app);





