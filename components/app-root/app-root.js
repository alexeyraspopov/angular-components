import App from 'lib/App';
import Observe from 'lib/Observe';
import 'components/users-list/users-list';
import appRootTemplate from './app-root.html';

const DIRECTIVE_NAME = 'appRoot';

export default DIRECTIVE_NAME;

App.directive(DIRECTIVE_NAME, () => ({
	scope: {},
	template: appRootTemplate,
	controller: ($scope) => {
		Observe({
			users: Promise.resolve([
				{name: 'Ann', isOnline: true},
				{name: 'Lisa', isOnline: true},
			]),
		}, $scope);

		$scope.onUserSelect = user => console.dir(user);
		$scope.append = () => $scope.users.push({name: 'Olga', isOnline: true});
	},
}));
