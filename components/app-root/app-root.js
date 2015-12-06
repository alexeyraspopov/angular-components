import App from 'App';
import 'components/users-list/users-list';
import appRootTemplate from './app-root.html';

const DIRECTIVE_NAME = 'appRoot';

export default DIRECTIVE_NAME;

App.directive(DIRECTIVE_NAME, () => ({
	scope: {},
	template: appRootTemplate,
	controller: ($scope) => {
		$scope.users = [
			{name: 'Ann', isOnline: true},
			{name: 'Lisa', isOnline: true},
		];

		$scope.onUserSelect = user => console.log(user);
		$scope.append = () => $scope.users.push({name: 'Olga', isOnline: true});
	},
}));
