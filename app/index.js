"use strict";

var angular = require('angular');
var angularRoute = require('angular-route');
var css = require('./style/main.css');


var app = angular.module('wowApp', ['ngRoute']);


require('./templates/nav/nav.component')(app);
require('./templates/task/task.component')(app);
require('./templates/balance/balance.component')(app);
require('./templates/company/company.component')(app);
require('./templates/finance/finance.component')(app);
require('./templates/statistic/statistic.component')(app);
require('./router/router')(app);





