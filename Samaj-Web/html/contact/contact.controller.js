(function() {
	'use strict'

	angular
		.module('app')
		.controller('contact.controller', ContactController);
	
	angular
	.module('app')
	.directive('userinfo', function() {
	    var directive = {};

	    directive.restrict = 'E';

	    directive.template = "User : {{user}}";

	    directive.scope = {
	        user : "@user"
	    }

	    return directive;
	})	

	ContactController.$inject = ['$rootScope', '$scope', '$compile'];

	function ContactController($rootScope, $scope, $compile) {
		var vm = this;
		vm.form = {};
		vm.formData = {};
		vm.login = login;
		
		activate();

		// activate function to be ran when this page is viewed
		function activate() {
		}
		
		function login(isValid) {
			if(isValid) {
				alert("Data entered : "+vm.formData.name+","+vm.formData.email+","+vm.formData.comment);
				vm.formData.name = "New Name";
			}
		};		
		
	};

})();