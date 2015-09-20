(function() {
	'use strict'

	angular
		.module('app')
		.controller('gallery.info.controller', GalleryInfoController);

	GalleryInfoController.$inject = ['$rootScope', '$scope', '$compile'];

	function GalleryInfoController($rootScope, $scope, $compile) {
		var vm = this;
		
		activate();

		// activate function to be ran when this page is viewed
		function activate() {
		}
		
	};

})();