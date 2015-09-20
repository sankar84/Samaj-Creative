(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	function config($stateProvider, $urlRouterProvider) {
		
		// logic for all the other urls
		$stateProvider
			.state('home', {
				controller: 'home.controller',
				controllerAs: 'vm',
				templateUrl: 'home/home.html',
				url: '/home'
			})
			.state('about', {
				controller: 'about.controller',
				controllerAs: 'vm',
				templateUrl: 'about/about.html',
				url: '/about'
			})
			.state('gallery', {
				controller: 'gallery.controller',
				controllerAs: 'vm',
				templateUrl: 'gallery/gallery.html',
				url: '/gallery'
			})
			.state('contact', {
				controller: 'contact.controller',
				controllerAs: 'vm',
				templateUrl: 'contact/contact.html',
				url: '/contact'
			});
		
		// Unmatched urls go to the login page
		$urlRouterProvider.otherwise('/home');
	};
	
})();