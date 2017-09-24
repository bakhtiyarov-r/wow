"use strict";
import css from './finance.css';

export default function Finance(app){
	app.component('financeComponent', {
	templateUrl: './finance.html',
	controller: function($scope) {
		$scope.css = css;
	}
  })
}