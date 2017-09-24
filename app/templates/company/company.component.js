"use strict";
import css from './company.css';

export default function Company(app){
	app.component('companyComponent', {
	templateUrl: './company.html',
	controller: function($scope) {
		$scope.css = css;
	}
  })
}