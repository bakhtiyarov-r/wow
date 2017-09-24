"use strict";
import css from './nav.css';

export default function Nav(app){
	app.component('navComponent', {
	templateUrl: './nav.html',
	controller: function($scope, $route) {
		$scope.$route = $route;
		$scope.css = css;
	}
  })
}