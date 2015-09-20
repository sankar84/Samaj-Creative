(function() {
	'use strict'

	angular
		.module('app')
		.controller('about.controller', AboutController);

	AboutController.$inject = ['$rootScope', '$scope', '$compile'];

	function AboutController($rootScope, $scope, $compile) {
		var vm = this;
		
		activate();

		// activate function to be ran when this page is viewed
		function activate() {
		}
		
	};

})();