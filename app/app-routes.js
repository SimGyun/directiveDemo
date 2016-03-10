define(function(require){

	var app=require('app');

	app.config(['$stateProvider',function($stateProvider){
		$stateProvider
			.state('page1',{
				url:'/page1',
				templateUrl:function(){
					return 'view/page1.html';
				},
				controllerUrl:'js/page1Controller.js',
				controller:'page1Controller',
				cache:false
			})

	}]);
})