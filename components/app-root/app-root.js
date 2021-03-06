import App from 'lib/App';
import Observe from 'lib/Observe';
import UsersService from 'services/UsersService';
import appRootTemplate from './app-root.html';
import 'components/users-list/users-list';

const DIRECTIVE_NAME = 'appRoot';

export default DIRECTIVE_NAME;

App.directive(DIRECTIVE_NAME, [UsersService, (Users) => ({
	scope: {},
	template: appRootTemplate,
	controller: ($scope) => {
		Observe({
			users: Users.all(),
		}, $scope);

		$scope.onUserSelect = user => void 0;
		$scope.append = () => $scope.users.push({name: 'Olga', isOnline: true});
	},
})]);
