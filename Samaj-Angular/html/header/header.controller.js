(function() {
	'use strict'

	angular
		.module('app')
		.controller('header.controller', HeaderController);

	HeaderController.$inject = ['$rootScope', '$scope', '$compile', '$location'];

	function HeaderController($rootScope, $scope, $compile, $location) {
		var vm = this;
		vm.isActive = isActive;
		
		activate();

		// activate function to be ran when this page is viewed
		function activate() {
			// $.browser is deprecated in jquery 1.9+
			$.browser = {};
			$.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
			$.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
			$.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
			$.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());			
			
		    $('.ddmenu li.dropdown').hover(function () {
		        if ($.browser.msie && (parseInt($.browser.version, 10) === 8 || parseInt($.browser.version, 10) === 7)) {
		            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
		            return;
		        }
		        var width = Math.max($(window).innerWidth(), window.innerWidth);
		        if (width > 979) $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();        
		    }, function () {
		        if ($.browser.msie && (parseInt($.browser.version, 10) === 8 || parseInt($.browser.version, 10) === 7)) {
		            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
		            return;
		        }
		        var width = Math.max($(window).innerWidth(), window.innerWidth);
		        if (width > 979) $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
		    });

		    $('.ddmenu li.dropdown').click(function () {
		        $('.dropdown-menu').stop(true, true).delay(200).fadeOut();
		        var width = Math.max($(window).innerWidth(), window.innerWidth);
		        if (width <= 1024) {
		            if ($(this).find('.dropdown-menu').css('display') == 'none') {
		                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
		                return false;
		            } else {
		                /*dropdown already opened. then goto parent link.*/
		            }
		        }
		    });
		}
		
	    function isActive (viewLocation) {
	        return viewLocation === $location.path();
	    };		
		
	};

})();