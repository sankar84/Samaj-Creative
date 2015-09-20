(function() {
	'use strict'

	angular
		.module('app')
		.controller('home.controller', HomeController);

	HomeController.$inject = ['$rootScope', '$scope', '$compile'];

	function HomeController($rootScope, $scope, $compile) {
		var vm = this;
		
		activate();

		// activate function to be ran when this page is viewed
		function activate() {
			startCamera();
		}
		
		function startCamera() {
			$('#camera_wrap').camera({ fx: 'scrollLeft', time: 2000, loader: 'none', playPause: false, navigation: true, height: '65%', pagination: true });
		}

	};

})();