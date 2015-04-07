(function (){
	"use strict";

	var app = angular.module('app', [])

	///// Directive
	app.directive('fixThis', fixThis)

	function fixThis($window){
		var directive = {
	        restrict: 'A',
	        link: linkFunc,
    	};

    	return directive;

    	function linkFunc(scope, el, attr, ctrl) {
    		var elY = el[0].offsetTop;

    		scope.header = 'Not Fixed';

	        angular.element($window).bind('scroll', function () {

	            // if (!scope.configuracaoCp)
	            //     return;

	            var altura = this.pageYOffset;

	            // console.log(altura + '/' + elY);

	            if (altura > elY) {

	                if (el.children().hasClass("fix-this"))
	                    return;

	                el.children().addClass("fix-this");
	                // el.next("div").addClass("container-fix-this");

	                scope.header = 'Fixed';
	            } else {
	                el.children().removeClass("fix-this");
	                // el.next("div").removeClass("container-fix-this");

	                scope.header = 'Not Fixed';
	            }
	        
	            scope.$apply();
	        });
	    }
	};

	///// Controller
	app.controller('appController', appController);

	function appController() {
		var vm = this;
	};
})();