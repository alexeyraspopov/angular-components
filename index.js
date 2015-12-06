import App from 'App';
import appRoot from 'components/app-root/app-root';

App.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false,
	});
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			template: '<app-root></app-root>',
		});
}]);
