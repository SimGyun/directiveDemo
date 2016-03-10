define(['asyncLoader'],function(asyncLoader){
	var angular=require('angular');

	require('angularUiRouter');

	var app=angular.module('directiveDemo',['ui.router']);
    //initialze
	asyncLoader.configure(app);
	return app;
})