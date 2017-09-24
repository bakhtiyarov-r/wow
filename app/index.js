"use strict";

import angular from 'angular';
import angularRoute from 'angular-route';
import css from './style/main.css';

import Nav from './templates/nav/nav.component';
import Task from './templates/task/task.component';
import Balance from './templates/balance/balance.component';
import Company from './templates/company/company.component';
import Finance from './templates/finance/finance.component';
import Statistic from './templates/statistic/statistic.component';
import Router from './router/router';

var app = angular.module('wowApp', ['ngRoute']);

Task(app);
Nav(app);
Balance(app);
Company(app);
Finance(app);
Statistic(app);
Router(app);







