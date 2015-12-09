import App from 'lib/App';
import UsersService from 'services/UsersService';
import 'components/app-root/app-root';
import 'components/user-info/user-info';

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
		})
		.state('home.user', {
			url: ':userId',
			resolve: {
				user: [UsersService, '$stateParams', (Users, $stateParams) => {
					return Users.byId($stateParams.userId);
				}],
			},
			controller: ($scope, user) => $scope.user = user,
			template: '<user-info data-user="user"></user-info>',
		});
}]);
