"use strict";
import css from './balance.css';

export default function Balance(app){
	app.component('balanceComponent', {
	templateUrl: './balance.html',
	controller: function($scope) {
		$scope.css = css;
	}
  })
}