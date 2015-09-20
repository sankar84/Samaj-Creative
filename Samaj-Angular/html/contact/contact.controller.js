(function() {
	'use strict'

	angular
		.module('app')
		.controller('contact.controller', ContactController);

	ContactController.$inject = ['$rootScope', '$scope', '$compile'];

	function ContactController($rootScope, $scope, $compile) {
		var vm = this;
		
		activate();

		// activate function to be ran when this page is viewed
		function activate() {
		}
		
	};

})();