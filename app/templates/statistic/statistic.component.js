"use strict";
import css from './statistic.css';

export default function Statistic(app){
	app.component('statisticComponent', {
	templateUrl: './statistic.html',
	controller: function($scope) {
		$scope.css = css;
	}
  })
}