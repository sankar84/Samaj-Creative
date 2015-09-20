(function() {
	'use strict'

	angular
		.module('app')
		.controller('gallery.controller', GalleryController);

	GalleryController.$inject = ['$rootScope', '$scope', '$compile'];

	function GalleryController($rootScope, $scope, $compile) {
		var vm = this;
		
		activate();

		// activate function to be ran when this page is viewed
		function activate() {
		}
		
	};

})();